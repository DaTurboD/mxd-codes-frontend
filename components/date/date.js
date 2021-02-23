import { parseISO, format } from 'date-fns'
import styled from 'styled-components';
import config from "@/lib/data/SiteConfig"

const PostDate = styled.time`
  position: relative;
  display: block;
`

export default function Date({ dateString, ago }) {
  const date = parseISO(dateString)
  return (
    <PostDate className="dt-published" dateTime={dateString}> {format(date, config.dateFormat).replace("-"," ")}</PostDate>
  )
}
