import React from 'react';
import logo from '../../public/favicon/gis-netzwerk_favicon.png';
import styled from 'styled-components';
import config from "../../data/SiteConfig";
import Img from 'react-optimized-image';
import Link from 'next/link'

// styled components
export const LogoWrapper = styled(Img)`
  height: 48px;
  width: 48px;
  cursor: pointer
`;


// component
export default function Logo() {
  return (
    <Link href={config.homePath} title={config.siteTitle}>
      <LogoWrapper src={logo} alt={config.siteTitle} title={config.siteTitle}/>
    </Link>
  )
}