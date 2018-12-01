import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';
import BraveComponentSpecimen from './specimens/brave-ui-component'
import logo from "./static/welcome/logo.svg";
const { Button } = require('brave-ui')

const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('./content/welcome/index.md'))
  },
  {
    title: 'Foundation',
    pages: [
      {
        title: 'Colors',
        path: '/foundation/colors',
        content: pageLoader(() => import('./content/components/button/index.md')),
      },
      {
        title: 'Typography',
        path: '/foundation/typography',
        content: pageLoader(() => import('./content/components/button/index.md')),
      },
      {
        title: 'Layout & Spacing',
        path: '/foundation/layout-spacing',
        content: pageLoader(() => import('./content/components/button/index.md')),
      },
      {
        title: 'Writing Style',
        path: '/foundation/writing-style',
        content: pageLoader(() => import('./content/components/button/index.md')),
      },
      {
        title: 'Iconography',
        path: '/foundation/icongraphy',
        content: pageLoader(() => import('./content/components/button/index.md')),
      },
    ]
  },
  {
    title: 'Components',
    pages: [
      {
        imports: { Button },
        path: '/components/button',
        title: 'Buttons',
        content: pageLoader(() => import('./content/components/button/index.md'))
      },
      {
        title: 'Icons',
        path: '/components/icons',
        content: pageLoader(() => import('./content/components/button/index.md')),
      },
      {
        title: 'Toggles',
        path: '/components/toggles',
        content: pageLoader(() => import('./content/components/button/index.md')),
      },
    ]
  },
  {
    title: 'Miscellaneous', 
    pages: [
      {
        path: '/misc/snippets',
        title: 'Highlight Reel',
        content: pageLoader(() => import('./content/misc/snippets.md'))
      },
      {
        path: '/misc/reading',
        title: 'Research Links',
        content: pageLoader(() => import('./content/misc/reading.md'))
      },
      {
        path: '/misc/icons',
        title: 'Deprecated Icon copy',
        content: pageLoader(() => import('./content/misc/icons.md'))
      }
      
    ]
  },
  {
    title: 'Design System Log', 
    pages: [
      {
        path: '/dsmlog/november2018',
        title: 'November 2018',
        content: pageLoader(() => import('./content/log/nov2018.md'))
      }, 
      {
        path: '/dsmlog/december2018',
        title: 'December 2018',
        content: pageLoader(() => import('./content/log/dec2018.md'))
      }
    ]
  },
];

const customSpecimens = {
  'brave-component': BraveComponentSpecimen
}

const theme = {
  // Typography
  fontHeading: 'Poppins, Muli',
  fontMono: 'Courier',
  fontFamily: 'Muli, Poppins',
  baseFontSize: '14px',

  // Colors
  background: '#F5F5F5',
  textColor: '#434351',
  codeColor: '#00263E',
  linkColor: '#Fb542b',

  // NavigationBar background color, but also sometimes used as a foreground
  // or border color.
  lightColor: '#D6D6D6',

  // Used in PageHeader
  pageHeadingBackground: 'linear-gradient(.25turn, #392DD1, #A91B78)',
  pageHeadingTextColor: '#fff',

  // Used in Menu and PageHeader to make sure the top parts have
  // the same height.
  pageHeadingHeight: 130,

  // Used for navigation bar
  navBarBackground: 'linear-gradient(#e66465, #9198e5)',
  navBarTextColor: '#003B5C',

  // Used in ResponsiveTabs (tab text), Download specimen (title text).
  // Typography: headings.
  brandColor: '#434351',

  sidebarColor: '#FFFFFF',
  sidebarColorText: '#262626',
  sidebarColorTextActive: '#Fb542b',
  sidebarColorLine: '#EBEBEB',
  sidebarColorHeading: '#003B5C',

  // Used in the html, react, and image specimens.
  bgLight: '#F2F2F2',
  bgDark: '#333333',

  // Keys appear to be PrismJS token types.
  codeStyles: {
    tag: { color: '#Fb542b' },
    punctuation: { color: '#535353' },
    script: { color: '#3F7397' },
    function: { color: '#Fb542b' },
    keyword: { color: '#3F7397' },
    string: { color: '#00263E' }
  },

  msRatio: 1.3
} 

ReactDOM.render(
  <Catalog
    title='Brave Design System'
    useBrowserHistory={true}
    logoSrc={logo}
    pages={pages}
    theme={theme}
    specimens={customSpecimens}
  />,
  document.getElementById('catalog')
);
