import React from "react"
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '@/components/post/post-body/post-body'
import Layout from '@/components/layout/layout'
import SEO from '@/components/seo/seo'
import { getAllPosts, getPostAndMorePosts } from '@/lib/data/api/cms'
import PageTitle from '@/components/title/page-title'
import markdownToHtml from '@/lib/utils/markdownToHtml'
import styled from 'styled-components';
import config from "@/lib/data/SiteConfig";
import ReadingProgress from "@/components/post/post-reading-progress/reading-progress.js"
import media from 'styled-media-query';
import Link from 'next/link'
import RelatedPosts from '@/components/post/post-preview/related-posts'
import Webmentions from "@/components/social/webmentions/webmentions"
//import PostComments from "@/components/post/post-comments/post-comments"
import getReadTime from "@/lib/utils/read-time"
import SocialShare from "@/components/social/social-share/social-share"
import PostImage from "@/components/post/post-image/post-image"
import PostTitle from '@/components/title/post-title'
import PostTags from '@/components/tags/tags'
import Date from "@/components/date/date"

// components for posts

const PostWrapper = styled.div`
  max-width: 1200px;
  padding: 0 var(--space);
  margin: var(--space-sm) auto var(--space-sm) auto;
  ${media.lessThan('medium')`
    padding-left: var(--space-sm);
    padding-right: var(--space-sm);
  `}
`

const PostImgWrapper = styled.div`
  max-width: 1300px;
  margin: calc(var(--space-lg)*2.5) auto var(--space-sm) auto;
  position: relative;
`


const Content = styled.div`
  grid-column: span 4/span 4;
  ${media.lessThan('large')`
    grid-column: span 6/span 6;
  `}
`

const PostTitleWrapper = styled.div`
  max-width: 800px;
  margin: var(--space-sm) auto var(--space-lg) 50px;
  padding: var(--space-sm) var(--space);
  position:absolute;
  bottom: 0;
  border-radius: var(--border-radius);
  z-index: 4;
  mix-blend-mode: luminosity;
  background-color: var(--body-bg);
  ${media.lessThan('large')`
    position: relative;
    margin: var(--space-sm) var(--space);
    padding: 0;
  `}
  ${media.lessThan('medium')`
    margin: var(--space-sm);
  `}
`

const TagsWrapper = styled.div`
  margin: var(--space-sm) 0;
`

const DateWrapper = styled.div`
  font-size: 12px;
`
const Hidden = styled.div`
  display: none;
`

export default function Post({ post }) {  

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const target = React.createRef()

  return (
    <Layout>
        {router.isFallback ? (
          <PageTitle>{config.loading}</PageTitle>
        ) : (
          <>
            <SEO   
              title={post.title}
              description={post.excerpt}
              image={post.coverImage.coverImage ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.coverImage.coverImage.url}` : ""}
              slug={`articles/${post.slug}`}
              date={post.dateUpdated ? post.dateUpdated : post.date}
              ogType="article"
              postSEO
            />
            <article ref={target} className="h-entry">

              <div className="webmention meta">
                {post.syndicationLinks? (
                  post.syndicationLinks.map((link) => {
                    return (<a aria-label={link.name} title={link.name} className="u-syndication syn-link" href={link.slug} rel="syndication" />)
                  })) : null }
              </div>
              
              <ReadingProgress target={target} />

              <PostImgWrapper>
                <PostImage postData={post} /> 
                <PostTitleWrapper>  
                  <PostTitle className="p-name">{post.title}</PostTitle>
                </PostTitleWrapper> 
              </PostImgWrapper>

              <PostWrapper>
                <DateWrapper><Date className="dt-published" updated={post.dateUpdated} dateString={post.dateUpdated ? post.dateUpdated : post.date} /></DateWrapper>
                <TagsWrapper><PostTags tags={post.tags}/></TagsWrapper> 

                <Hidden>  
                  <span className="h-card">
                    <img className="u-photo" src={config.siteLogo} alt={`Image of ${config.siteTitle}`}  /> 
                    <strong className="p-name">Max Dietrich</strong>
                  </span>
                </Hidden> 

                <Content>
    
                  <PostBody className="e-content" content={post.content} />   
                  
                  {/*<SocialShare slug={`/articles/${post.slug}`} /> */} 
                  <Webmentions slug={`/articles/${post.slug}`} />
                  {/*<PostComments postID={post.id}/>*/}  

                </Content>

              </PostWrapper>

            </article>
            
          </>
        )}     
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const data = await getPostAndMorePosts(params.slug)
  const content = data?.posts[0]?.content || ''
  const excerpt = await markdownToHtml(data?.posts[0]?.excerpt || '')
  const readingTime = getReadTime(content); 

  return {
    revalidate:  86400,
    props: {
      post: {
        ...data?.posts[0],
        readingTime: readingTime,
        content,
        excerpt,
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
