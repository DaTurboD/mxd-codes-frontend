import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    color: inherit;
    margin: 0;
    font-size: 100%;
    vertical-align: baseline;
    text-decoration: none;
    overflow-wrap: break-word;
    scrollbar-color: var(--secondary-color) var(--primary-color);
  }
  a {
    transition: 0.2s;
  }
  ::selection {
    background: var(--primary-color);
    color: var(--gray-extra-light);
  }
  h1 {
    font-weight: 200;
    letter-spacing: 0.6px;
  }
  h2, h3, h4, h5, h6 {
    font-weight: 200;
    letter-spacing: 0.3px;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html {
    font-size: 62.5%;
  }
  body {
    line-height: 1.6;
    color: var(--text-color)
  }
  strong {
    font-weight: bold;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: var(--body-bg);
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-size: 1.5rem;
    font-display: block !important;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }



  :root { 
    --gray-extra-light: #fafafa; 
    --gray-light: #c9d1d9;  
    --gray: #a8bfce;
    --gray-dark: #3f3f40;
    --primary-color: #0a1924;
    --secondary-color: #1c262e;
    --thirdy-color: #c85517;
    --body-bg: var(--primary-color); 
    --bg-light: var(--gray-light);
    --bg-dark: var(--secondary-color);
    --border-light: var(--gray-light);
    --border-dark: var(--gray-dark);
    --secondary-font: open sans,sans-serif;
    --link-color: var(--text-dark);
    --link-color-hover: var(--thirdy-color);
    --text-color: #c9d1d9;
    --text-light: var(--gray-light);
    --text-dark: var(--gray-dark);
    --width-container: 1040px;
    --space: 2rem;
    --space-sm: 1rem;
    --space-lg: 3rem;
  }
`

export default GlobalStyle
  
