import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';
import BraveComponentSpecimen from './specimens/brave-ui-component'
import logo from "./static/introduction/logo.svg";
import css from "./style.css";
const { Button, Toggle } = require('brave-ui')

const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('./content/introduction/index.md'))
  },
  {
    path: '/',
    title: 'Brand',
    pages: [
      {
        title: 'Overview',
        path: '/brand/overview',
        content: pageLoader(() => import('./content/brand/index.md')),
      },
      {
        title: 'Logo',
        path: '/brand/logo',
        content: pageLoader(() => import('./content/brand/logo/index.md')),
      },
      {
        title: 'Brand Guidelines',
        path: '/brand/guidelines',
        content: pageLoader(() => import('./content/brand/guidelines/index.md')),
      },
      {
        title: 'Voice & Tone',
        path: '/brand/voice',
        content: pageLoader(() => import('./content/brand/voice/index.md')),
      },
    ]
  },
  {
    title: 'Foundation',
    pages: [
      {
        title: 'Overview',
        path: '/foundation',
        content: pageLoader(() => import('./content/foundation/index.md')),
      },
      {
        title: 'Color System',
        path: '/foundation/color',
        content: pageLoader(() => import('./content/foundation/color/index.md')),
      },
      {
        title: 'Typography',
        path: '/foundation/typography',
        content: pageLoader(() => import('./content/foundation/typography/index.md')),
      },
      {
        title: 'Layout & Spacing',
        path: '/foundation/layout',
        content: pageLoader(() => import('./content/foundation/layout/index.md')),
      },
      {
        title: 'Iconography',
        path: '/foundation/iconography',
        content: pageLoader(() => import('./content/foundation/iconography/index.md')),
      },
    ]
  },
  {
    title: 'Components',
    pages: [
      {
        title: 'Buttons',
        imports: { Button },
        path: '/components/button',
        content: pageLoader(() => import('./content/components/button/index.md'))
      },
      {
        title: 'Icons',
        path: '/components/icons',
        content: pageLoader(() => import('./content/components/icons/index.md')),
      },
      {
        title: 'Toggle',
        imports: { Toggle },
        path: '/components/toggle',
        content: pageLoader(() => import('./content/components/toggle/index.md')),
      },
    ]
  },
  {
    path: '/',
    title: 'Resources',
    pages: [
      {
        title: 'Logo',
        path: '/resources/logo',
        content: pageLoader(() => import('./content/resources/logo.md')),
      },
      {
        title: 'Fonts',
        path: '/resources/fonts',
        content: pageLoader(() => import('./content/resources/fonts.md')),
      },
      {
        title: 'Icons',
        path: '/resources/icons',
        content: pageLoader(() => import('./content/resources/icons.md')),
      },
      {
        title: 'Graphics',
        path: '/resources/graphics',
        content: pageLoader(() => import('./content/resources/graphics.md')),
      },
    ]
  },
  {
    title: 'Other', 
    pages: [
      {
        path: '/other/icons',
        title: 'Deprecated Icon copy',
        content: pageLoader(() => import('./content/other/icons.md'))
      }
    ]
  }
];

const customSpecimens = {
  'brave-component': BraveComponentSpecimen
}

const theme = {
  // Typography
  fontHeading: 'Muli',
  fontMono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  fontFamily: 'Muli',
  baseFontSize: '14px',

  // Colors
  background: '#FFF',
  textColor: '#434351',
  codeColor: '#00263E',
  linkColor: '#Fb542b',

  // NavigationBar background color, but also sometimes used as a foreground or border color.
  lightColor: '#D6D6D6',

  // Used in PageHeader
  pageHeadingBackground: '#343546',
  pageHeadingTextColor: '#FFF',

  // Used in Menu and PageHeader to make sure the top parts have the same height.
  pageHeadingHeight: 160,

  // Used for navigation bar
  navBarBackground: 'linear-gradient(#e66465, #9198e5)',
  navBarTextColor: '#003B5C',

  // Used in ResponsiveTabs (tab text), Download specimen (title text). Typography: headings.
  brandColor: '#434351',
  sidebarColor: '#FFFFFF',
  sidebarColorText: '#262626',
  sidebarColorTextActive: '#Fb542b',
  sidebarColorLine: '#EBEBEB',
  sidebarColorHeading: '#003B5C',

  // Used in the html, react, and image specimens.
  bgLight: '#FFF',
  bgDark: '#333333',

  // Keys appear to be PrismJS token types.
  codeStyles: {
  tag: { color: '#535353' },
  punctuation: { color: '#9e9e9e' },
  script: { color: '#535353' },
  function: { color: '#535353' },
  keyword: { color: '#3F7397' },
  string: { color: '#535353' }
  },

  msRatio: 1.4,
  checkerboardPatternLight: 'transparent',
} 

ReactDOM.render(
  <Catalog
    title='Brave Design System'
    useBrowserHistory={true}
    logoSrc={logo}
    css={css}
    pages={pages}
    theme={theme}
    specimens={customSpecimens}
  />,
  document.getElementById('catalog')
);
