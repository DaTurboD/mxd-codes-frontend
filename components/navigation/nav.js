import styled from 'styled-components'
import media from 'styled-media-query';
import ActiveLink from "@/components/navigation/active-link"


const NavItems = styled.li`
  flex: 40%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${media.lessThan('medium')`
    margin-top: var(--space-sm);
  `}
`


const NavItem = styled.a`
  transition: none;
  color: ${props => (props.color ? `#fff`  : "color: var(--gray);")}
  :hover { 
    color: ${props => (props.color ? `#fff`  : "var(--text-color-hover)")}
    text-decoration: none;
    background-image: linear-gradient(var(--thirdy-color),var(--thirdy-color));
    background-size: 100% 1px;
    background-position: 0 100%;
    background-repeat: no-repeat;
  }
  .active {
    font-weight: 600;
    color: var(--text-color);
  }
  ${media.lessThan('medium')`
    margin-left: 0;
  `}
  
  ${media.lessThan('small')`
    font-size: 1rem;
  `}
`


export default function Nav( color ) {


  const headerItems = [
    { "name": "Articles", "link":  "/articles" },
    { "name": "Links", "link":  "/links" },
    { "name": "Notes", "link":  "/notes" },
    { "name": "Data", "link":  "/site-stats" },
    { "name": "About", "link":  "/about" },
  ]


  return (
    <NavItems>
        {headerItems.map((item, i) => (
            <NavItem color={color.color}>
                <ActiveLink activeClassName={`active`} href={item.link} passHref>
                    <a title={item.name}>{item.name}</a>
                </ActiveLink> 
            </NavItem>
        ))}
    </NavItems>
  )
}
