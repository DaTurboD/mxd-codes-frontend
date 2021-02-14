import React, { useRef, useState} from "react"
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '@/components/post/post-body/post-body'
import PostHeader from '@/components/post/post-header/post-header'
import Layout from '@/components/layout/layout'
import SEO from '@/components/seo/seo'
import { getAllPosts, getPostAndMorePosts } from '@/lib/data/api/cms'
import PageTitle from '@/components/title/page-title'
import markdownToHtml from '@/lib/markdownToHtml'
import styled from 'styled-components';
import config from "@/lib/data/SiteConfig";
import ReadingProgress from "@/components/post/post-reading-progress/reading-progress.js"
import media from 'styled-media-query';
//import CoverImage from '@/components/post/post-image/cover-image'
import Header from '@/components/navigation/header/header'
import Footer from '@/components/navigation/footer/footer'
import Link from 'next/link'
import RelatedPosts from '@/components/post/post-preview/related-posts'
import PostReactions from "@/components/post/post-reactions/post-reactions"
//import PostComments from "@/components/post/post-comments/post-comments"
import getReadTime from "@/lib/read-time"
import TableOfContents from "@/components/post/post-toc/table-of-contents"
import toc from 'markdown-toc'

// components for posts

const PostWrapper = styled.div`
  max-width: 1200px;
  padding: var(--space-lg) var(--space);
  margin: auto;
  ${media.lessThan('medium')`
    padding-left: var(--space-sm);
    padding-right: var(--space-sm);
  `}
`


const Content = styled.div`
  grid-column: span 4/span 4;
  margin-top: var(--space-lg);
  ${media.lessThan('large')`
    grid-column: span 6/span 6;
  `}
`

const MoreContainer = styled.div`
  margin: var(--space) auto 0 auto;
  text-align: left;    
  cursor: pointer;
  font-weight: 600;
  font-size: 0.6em;
  text-decoration: none;
`
const MoreArticles = styled.a`
  cursor: pointer;
  transition: 0.2s;
  :hover {
    text-decoration: underline;
  }
  :before {
    content: "\f060";
    font-family: "Line Awesome Free";
    font-weight: 900;
  }
`

const PostShare = styled.div`
  max-width: 700px;
  border-top: 1px solid var(--primary-color);
  padding-top: var(--space);
  margin-top: var(--space-sm);
`

const PostShareTitle = styled.p`
  margin-bottom: var(--space-sm);
`

const Icons= styled.i`    
  font-size: .75em;
  transition: 0.2s;
  border: 1px solid;
  cursor: pointer;
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  margin-right: var(--space-sm);
  color: var(--text-color);
  outline: none;
  padding: var(--space-sm);
  border-radius: 50%;
  :hover {
    background-color: var(--text-color);
    color: #fff;
  }
`

const TOCSidebarWrapper = styled.div`
  top: 0;
  position: sticky;
  margin-top: calc(var(--space-lg)*5);
  padding-top: var(--space-lg);
  margin-left: var(--space);
  ${media.lessThan('1200px')`
    display: none;
  `}
`


const TOCInPostWrapper = styled.div`
  ${media.greaterThan('1200px')`
    display: none;
  `}
`
export default function Post({ post, morePosts }) {  
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);


  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  


  function copyToClipboard(e) {
    navigator.clipboard.writeText(`${config.siteUrl}/articles/${post.slug}`);
    e.target.focus();
    setCopySuccess('Copied!');
  };

  const target = React.createRef()

  return (
    <Layout>
      <Header/>
        {router.isFallback ? (
          <PageTitle>{config.loading}</PageTitle>
        ) : (
          <>
            <SEO   
              title={post.title}
              description={post.excerpt}
              image={post.coverImage.coverImage.formats.small.url}
              slug={`articles/${post.slug}`}
              date={post.date}
              ogType="article"
              author={post.user}
              postSEO
            />
            <article ref={target} className="h-entry">
              <ReadingProgress target={target} />
              {/*{post.coverImage.coverImage ? (
              <CoverImage title={post.title} alt={post.title} url={post.coverImage.coverImage.url} caption={post.coverImage.caption}/>
              ) : null }*/}

              <PostWrapper>

                  <Content>
                    <MoreContainer>
                      <Link href={`/articles`} passHref>
                        <MoreArticles title="Back to all articles">{' '}Back to Articles</MoreArticles>
                      </Link>
                    </MoreContainer>

                    <PostHeader postData={post} />    
                    <TOCInPostWrapper>
                      <TableOfContents content={post.toc}/>
                    </TOCInPostWrapper>      
                    
                    <PostBody className="e-content" content={post.content} />     

                    <PostShare> 
                    <PostShareTitle>Share</PostShareTitle>
                      <Link href={`https://twitter.com/share?url=${config.siteUrl}/articles/${post.slug}`} passHref><a><Icons className="lab la-twitter" title="Share on Twitter" /></a></Link>
                      <Link href={`http://www.reddit.com/submit?url=${config.siteUrl}/articles/${post.slug}`} passHref><a><Icons className="lab la-reddit" title="Share on Reddit" /></a></Link>
                      <Link href={`https://www.facebook.com/sharer/sharer.php?u=${config.siteUrl}/articles/${post.slug}`} passHref><a><Icons className="lab la-facebook" title="Share on Facebook" /></a></Link>
                      <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${config.siteUrl}/articles/${post.slug}`} passHref><a><Icons className="lab la-linkedin" title="Share on Linkedin" /></a></Link>
                      <Link href={`https://wa.me/?text=${config.siteUrl}/articles/${post.slug}`} passHref><a><Icons className="lab la-whatsapp" title="Share on Whatsapp" /></a></Link>
                      <a><Icons onClick={copyToClipboard} className="las la-paste" title="Copy to Clipboard" /></a>
                    </PostShare> 
                    <PostReactions postId={post.id} postSlug={post.slug} />
                    {/*<PostComments postID={post.id}/>*/}  
                    <RelatedPosts relatedPosts={morePosts} />
                  </Content>


              </PostWrapper>

            </article>
            
          </>
        )}     
      <Footer />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const data = await getPostAndMorePosts(params.slug)
  const content = data?.posts[0]?.content || ''
  const excerpt = await markdownToHtml(data?.posts[0]?.excerpt || '')
  const readingTime = getReadTime(content); 
  const tocContent = await markdownToHtml(toc(content).content)

  return {
    revalidate:  86400,
    props: {
      post: {
        ...data?.posts[0],
        readingTime: readingTime,
        content,
        excerpt,
        toc: tocContent
      },
      morePosts: data?.morePosts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts()
  return {
    paths: allPosts?.map((post) => `/articles/${post.slug}`) || [],
    fallback: true,
  }
}
