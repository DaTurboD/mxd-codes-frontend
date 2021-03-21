import markdownStyles from '@/styles/markdown-styles.module.css'
import styled from 'styled-components';
import ReactMarkdown from "react-markdown"
import renderers from "@/lib/utils/renderers"
import TableOfContents from "@/components/article/article-toc/table-of-contents"
import media from 'styled-media-query';
import Link from "next/link"
        
const PostContent = styled.section`
  grid-template-columns: repeat(8,minmax(0,1fr));
  gap: var(--space-sm);
  display: grid;
  margin: var(--space-sm) 0;
  ${media.lessThan('large')`
    display: block;
  `}
`

const EndOfPost = styled.div`
  display: flex;
`

const Square = styled.span`
  display: block;
  content: "";
  margin-right: var(--space-sm);
  width: 10px;
  height: 10px;
  background-color: #191f45;
  background-color: var(--primary-color);
`

const ContentWrapper = styled.div`
  grid-column: span 6/span 6;
`

const TOCWrapper = styled.div`
  grid-column: span 2/span 2;

`

export default function PostBody({ content }) {

  return (
    <>
      <PostContent>
        <ContentWrapper>
          <ReactMarkdown
            className={markdownStyles['markdown']}
            children={content}
            renderers={renderers}
          />
        </ContentWrapper>
        {/*<TOCWrapper>
          <TableOfContents content={content} />
        </TOCWrapper>*/}
      </PostContent>
      <EndOfPost><Square title="🦄"/><Square title="😄"/></EndOfPost>
    </>
  )
}
