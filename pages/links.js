import Layout from '@/components/layout/layout'
import { getAllLinks } from '@/lib/data/api/cms'
import config from "@/lib/data/SiteConfig";
import styled from 'styled-components';
import media from "styled-media-query"
import SEO from '@/components/seo/seo'
import { useRouter } from 'next/router'
import PageTitle from '@/components/title/page-title'
import PostTags from "@/components/tags/tags"
import SubTitle from '@/components/title/sub-title'
import Grid from '@/components/grid/grid'
import HCard from "@/components/microformats/h-card"

const LinksContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`


const LinksItem = styled.li`
  background-color: var(--content-bg);
  padding: var(--space-sm);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  margin-bottom: var(--space);
  ${media.lessThan('medium')`
    margin-left: 0;
    margin-bottom: var(--space-sm);
`}
`

const LinksTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: calc(var(--space-sm)*0.5);
`

const LinksLink = styled.cite`
  font-size: 14px;
  border-bottom: 1px solid var(--link-color);
  cursor: pointer;
  font-family: var(--secondary-font);
`

const LinksContent = styled.p`
  margin: calc(var(--space-sm)*0.5) 0;
  line-height: 1.75rem;
  max-width: 700px;
  font-family: var(--secondary-font);
`

const LinksGrid = styled.ol`
  grid-column: span 6/span 6;
  list-style: none;
  padding-inline-start: 0;
`

export default function Links({ allLinks }) {
  const router = useRouter()

  return (
    <>
      <Layout>
        {router.isFallback ? (
            <PageTitle>{config.loading}</PageTitle>
          ) : (
            
          <>
            <SEO   
              title="Links"
              slug="links"
            />
              <PageTitle>Links</PageTitle>
              <SubTitle>Awesome content on the web, in random order.</SubTitle>
              <LinksContainer >

                <Grid>

                  <LinksGrid>
                    {allLinks.map((link,i) => (
                      <LinksItem key={i} className="h-entry">           
                          <HCard /> 
                          <LinksTitle className="p-name"><a href={link.link} title={link.title}>{link.title}</a></LinksTitle>
                          <LinksLink><a className="u-bookmark-of h-cite" href={link.link} title={link.title}>{link.link}</a></LinksLink>
                          <LinksContent className="e-content">{link.description}</LinksContent>
                          <PostTags tags={link.tags} />

                      </LinksItem>
                    ))}
                  </LinksGrid>

                </Grid>

              </LinksContainer>
          </>
        )}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allLinks = (await getAllLinks()) || []
  
  return {
    revalidate:  86400,
    props: { allLinks },
  }
}