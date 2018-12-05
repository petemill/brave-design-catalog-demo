import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';
import BraveComponentSpecimen from './specimens/brave-ui-component'
import logo from "./static/introduction/logo.svg";
const { Button } = require('brave-ui')

const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('./content/introduction/index.md'))
  },
  {
    path: '/',
    title: 'Brand & Logo',
    pages: [
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
        imports: { Button },
        path: '/components/button',
        title: 'Buttons',
        content: pageLoader(() => import('./content/components/button/index.md'))
      },
      {
        title: 'Icons',
        path: '/components/icons',
        content: pageLoader(() => import('./content/components/icons/index.md')),
      },
      {
        title: 'Toggle',
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
        path: '/other/snippets',
        title: 'Progress Logs',
        content: pageLoader(() => import('./content/other/progress.md'))
      },
      {
        path: '/other/annoyances',
        title: 'Catalog Annoyances',
        content: pageLoader(() => import('./content/other/annoyances.md'))
      },
      {
        path: '/other/icons',
        title: 'Deprecated Icon copy',
        content: pageLoader(() => import('./content/other/icons.md'))
      },
    ]
  },
];

const customSpecimens = {
  'brave-component': BraveComponentSpecimen
}

const color = {
  whiteBase: '#FFF',
}

const theme = {
  // Typography
  fontHeading: 'Muli',
  fontMono: 'Courier',
  fontFamily: 'Muli',
  baseFontSize: '14px',

  // Colors
  background: '#F5F5F5',
  textColor: '#434351',
  codeColor: '#00263E',
  linkColor: '#Fb542b',

  // NavigationBar background color, but also sometimes used as a foreground or border color.
  lightColor: '#D6D6D6',

  // Used in PageHeader
  pageHeadingBackground: '#343546',
  pageHeadingTextColor: color.whiteBase,

  // Used in Menu and PageHeader to make sure the top parts have the same height.
  pageHeadingHeight: 200,

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
  bgLight: color.whiteBase,
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

  msRatio: 1.4,
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
