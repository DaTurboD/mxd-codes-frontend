
import React, { useState, useEffect } from "react"
import styled from 'styled-components';
import media from 'styled-media-query';
import config from "@/lib/data/SiteConfig"
import { format, subDays, formatDistance} from 'date-fns'
import Image from 'next/image'

const ReactionsIcon = styled.i`
`

const PreviewLikeCount = styled.span`   
  margin-left: var(--space-sm);
`

const WebMentionsWrapper = styled.section`
  margin-top: var(--space);
  max-width: 700px;
`

const WebmentionsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: var(--space-sm);
`

const WebmentionsTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--space-sm);
`

const WebmentionsInfo = styled.a`
  font-size: 1rem;
  display: flex;
  align-items: center;
`

const WebmentionsInfoIcon = styled.i`
  font-size: 1.5rem;
`

const WebmentionsList = styled.div`
  list-style: none;
  padding-inline-start: 0;
  margin-bottom: var(--space-sm);
`

const WebmentionComment = styled.div`
  font-size: 1rem;
  margin-bottom: var(--space);
  font-family: var(--secondary-font);
`

const WebmentionAuthor = styled.div`  
  margin-bottom: calc(var(--space-sm)*.5);
`

const WebmentionAuthorImgWrapper = styled.a`
  display: inline-block;
  vertical-align: middle;
  width: 40px;
  height: 40px;
  overflow: hidden;
  margin-right: calc(var(--space-sm)*.5);
  border-radius: var(--border-radius);
  border: 1px solid var(--gray-extra-light);
  background-color: var(--gray-extra-light);
  box-shadow: none;
  :hover {
    display: cursor;
  }
`

const WebmentionAuthorName = styled.span`
  font-weight: 600;  
  display: inline-block;
  margin-right: calc(var(--space-sm)*.5);
`

const WebmentionDate = styled.cite`
  ${media.lessThan('small')`
    display: none;
  `}
`

const WebmentionContent = styled.p`
`


const SendWebmentions = styled.div`
  margin: var(--space-sm) auto var(--space) auto;
`

const SendText = styled.p`
`

const Input = styled.input`
  padding: .5rem 1rem; 
  margin: var(--space-sm) auto .25rem auto;
  width: 100%;
  border: 2px solid var(--gray-light);
  background-color: var(--gray-extra-light);
  :invalid {
    border: 1px solid red;
  }
`

const Button = styled.button`
  border: 2px solid var(--primary-color);
  width: auto !important;
  color: var(--gray-extra-light);
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  transition: all .2s ease-in-out;
  text-align: center;
  padding: .75rem 1.5rem;
  width: 20%;
  background: var(--primary-color);
  :hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 8px 16px 0px;
  }       
`
export default function Webmentions({ slug, preview }) {
  const [webmentions, setWebmentions] = useState([])
  const [sourceUrl, setSourceUrl] = useState("")
  const [status, setStatus] = useState("")

  const url = config.siteUrl+slug
  
  const getWebmentionsForUrl = (webmentions, url) => {
    const commentsProperty = ['mention-of', 'in-reply-to']
    const likesProperty = ['like-of']
    const repostsProperty = ['repost-of']

    const hasRequiredFields = entry => {
        const { author, published, content } = entry
        return author.name && published && content
    }
    const sanitize = entry => {
        const { content } = entry
        if (content['content-type'] === 'text/html') {
            content.value = sanitizeHTML(content.value)
        }
        return entry
    }

    const count = webmentions.length
    const comments = webmentions
      .filter(entry => entry['wm-target'] === url)
      .filter(entry => commentsProperty.includes(entry['wm-property']))
      .filter(hasRequiredFields)
      .map(sanitize)
    const likes = webmentions
      .filter(entry => entry['wm-target'] === url)
      .filter(entry => likesProperty.includes(entry['wm-property']))
    const reposts = webmentions
      .filter(entry => entry['wm-target'] === url)
      .filter(entry => repostsProperty.includes(entry['wm-property']))

    return {
      count: count,
      comments: comments,
      likes: likes,
      reposts: reposts
    }
  }

  const sendWebmention = () => {
    const endpoint = "https://webmention.io/mxd.codes/webmention"
    async function sendData() {
      const res = await fetch(endpoint, {
        method: 'post',
        body: `source=${encodeURIComponent(sourceUrl)}&target=${encodeURIComponent(url)}`,
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      });
      const json = await res.json()
      if (json.error) {
        setStatus(json.error)
      }
      setStatus(json.statusText)
    }
    sendData();
  }

  useEffect(() => {
    async function getData() {
      fetch(`https://webmention.io/api/mentions.jf2?target=${url}`)
        .then((response) => response.json())
        .then((result) => {
          setWebmentions(getWebmentionsForUrl(result.children, url))
        });
      }
      getData()
  }, []);


  const renderAuthorImg = (mention) => {
    return (
      <WebmentionAuthorImgWrapper className="u-url" href={mention.author.url}>
        <Image
          src={mention.author.photo}
          height="40"
          width="40"
          className="u-photo"
          alt={`Photo of ${mention.author.name}`}
          title={mention.author.name}
        />
      </WebmentionAuthorImgWrapper>
    )
  }

  return (
    <>
    {preview ? (
    <>
      <PreviewLikeCount aria-label={webmentions.count} >
      <ReactionsIcon 
        title={`${webmentions.count} Reactions`}
        className="las la-heart"
      /> {webmentions.count}</PreviewLikeCount> 
    </>
    ) : (
      <>
      <WebMentionsWrapper> 
        <WebmentionsHeader>
          <WebmentionsTitle>{webmentions.count} Webmentions</WebmentionsTitle>
          <WebmentionsInfo 
            href="https://indieweb.org/Webmention" 
            target="_blank" rel="noopener noreferrer" 
            title="What's this?" 
            onClick={() => {!process.env.NODE_ENV === 'development' ? window._paq.push(['trackEvent', 'WebMentionsInfo', 'Click on Info']) : null}}
          ><WebmentionsInfoIcon className="las la-question-circle" /></WebmentionsInfo>
        </WebmentionsHeader>

        
        <SendWebmentions>
          <SendText>Have you published a response to this? Send me a webmention by letting me know the URL.</SendText>
          <Input
            type="webmention-source"
            name="webmention-source"
            id="webmention-source"
            label="webmention-source-input"
            placeholder="URL / permalink of your post"
            onChange={(e) => setSourceUrl(e.target.value)}
          />
          <Button
            type="button"
            aria-label="Send Webmention"
            onClick={() => sendWebmention()}
            style={{ width: "100%" }}
          >
          Send Webmention
          </Button>
          {status ? <span>{status}</span> : null}
        </SendWebmentions>

        {webmentions.count > 0 ? (
        <>
          <WebmentionsList>
          {/* Comments */}
          {webmentions.comments.length > 0 ? (
          webmentions.comments.map((mention) => (
            <WebmentionComment>
              <WebmentionAuthor className="h-card p-author" >
                {renderAuthorImg(mention)}
                <WebmentionAuthorName className="p-name">{mention.author.name}</WebmentionAuthorName>
                <WebmentionDate className="dt-published">{mention.published ? `${formatDistance(new Date(mention.published), new Date())} ago` : null}</WebmentionDate>
              </WebmentionAuthor>
              <WebmentionContent className="p-content u-comment">{mention.content? mention.content.text : null}</WebmentionContent>
            </WebmentionComment>
          ))
          ) : null}
          </WebmentionsList> 
          {/* Likes */}
          
          {webmentions.likes.length > 0 ? (
          <WebmentionsList>
            <WebmentionsTitle>Likes</WebmentionsTitle>
            {webmentions.likes.map((mention) => (
              renderAuthorImg(mention)
            ))}
            </WebmentionsList>
          ) : null }
          {/* Reposts*/}
          {webmentions.reposts.length > 0 ? (
          <WebmentionsList>
            <WebmentionsTitle>Reposts</WebmentionsTitle>
            {webmentions.reposts.map((mention) => (
              renderAuthorImg(mention)
            ))}
            </WebmentionsList>
          ) : null }
        </>
        ) : (
          <WebmentionContent>Found no Webmentions yet. Be the first!</WebmentionContent>
        )}
      
      </WebMentionsWrapper> 
    </>

    ) 
    
    }
    </>
  )
}
