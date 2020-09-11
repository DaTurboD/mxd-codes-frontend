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
  }
  a {
    transition: 0.2s;
  }
  ::selection {
    background: var(--primary-color);
    color: var(--gray-extra-light);
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
    color: var(--text-dark)
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
    font-family: var(--primary-font);
    font-size: 1.5rem;
  }
  img {
    display: block;
  	max-width: 100%;
    height: auto;
  }
  :root { 
    --gray-extra-light: #fafafa; 
    --gray-light: #eaeaea;  
    --gray: #475060;
    --gray-dark: #29293a;
    --primary-color: #1b496e;
    --secondary-color: #3f51b5;
    --thirdy-color: #001ff9;
    --body-bg: var(--gray-extra-light); 
    --bg-light: var(--gray-extra-light);
    --bg-dark: var(--gray-dark);
    --border-light: var(--gray-light);
    --border-dark: var(--gray-dark);
    --primary-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --secondary-font: open sans,sans-serif;
    --code-font: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    --link-color: var(--text-dark);
    --link-color-hover: var(--text-light);
    --text-color: var(--gray);
    --text-light: var(--gray-light);
    --text-dark: var(--gray-dark);
    --width-container: 1040px;
    --space: 2rem;
    --space-sm: 1rem;
    --space-lg: 3rem;
  }
`
  