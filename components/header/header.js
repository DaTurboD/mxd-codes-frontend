import styled from 'styled-components'
import Link from 'next/link'
import config from "../../data/SiteConfig";
import media from 'styled-media-query';
import Logo from '../logo';
import React, { Component, useState } from 'react';
import ButtonMenu from './button';
import Navigation from './header-navigation';

const HeaderWrapper = styled.div`
  background-color: #fff;
  display: flex;
  border-bottom: 1px solid var(--gray-light);

  ${media.lessThan('large')`
  top: 0;
  left: 0;
    position: sticky;
    width: 100%;
    z-index: 10;
  `}
`

const NavTitle = styled.div`
  width: auto;
  height: 50px;
  padding-left: var(--space-sm);
  padding-top: calc(var(--space-sm)*1.2);
  color: var(--gray);
  font-size: 2rem;
`

const NavSection = styled.span`
  width: auto;
  padding-left: calc(var(--space-sm)*0.5);
  color: var(--gray);
  font-size: 2rem;
`


const HeaderLogo = styled.div`
  padding: var(--space-sm) 0 calc(var(--space-sm)*0.5) var(--space-lg);
`

const NavMenu = styled.div`
  position: relative;
  top: 60px;
  ${media.greaterThan('medium')`
    margin: 0 var(--space) 0 auto;
    width: auto;
    top: 0;
  `}
`;


export default function HeaderNav() {

  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu);
  }


  return (
    <HeaderWrapper>

      <HeaderLogo >
        <Logo />
      </HeaderLogo>
          
        <NavTitle>
          <Link href={config.homePath}>
            <a title={config.siteTitle}>{config.siteTitle}</a>
          </Link>
        </NavTitle>

        <ButtonMenu
          handleClick={handleToggleMenu}
          isActive={toggleMenu}
        />
        <NavMenu>
          <Navigation isActive={toggleMenu} handleToggleMenu={handleToggleMenu} />
        </NavMenu>

    </HeaderWrapper>
  )
}
