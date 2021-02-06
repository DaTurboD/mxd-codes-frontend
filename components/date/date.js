import { parseISO, format } from 'date-fns'
import config from "../../lib/data/SiteConfig";
import styled from 'styled-components';

const PostDate = styled.time`
  position: relative;
  display: block;
`

export default function Date({ dateString, ago }) {
  const date = parseISO(dateString)
  return <PostDate dateTime={dateString}><i class="las la-calendar"></i> {format(date, config.dateFormat)}</PostDate>
}
