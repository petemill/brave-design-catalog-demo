import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';
import BraveComponentSpecimen from './specimens/brave-ui-component'
const { Button } = require('brave-ui')

const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('./content/welcome/index.md'))
  },
  {
    title: 'Components',
    pages: [
      {
        imports: { Button },
        path: '/components/button',
        title: 'Button',
        content: pageLoader(() => import('./content/components/button/index.md'))
      },
    ]
  },
  {
    title: 'Miscellaneous', 
    pages: [
      {
        path: '/pages',
        title: 'Annoyances',
        content: pageLoader(() => import('./content/misc/annoyances.md'))
      }
    ]
  }
];

const customSpecimens = {
  'brave-component': BraveComponentSpecimen
}

const theme = {
  // Typography
  fontHeading: 'Poppins, Muli',
  fontMono: 'Courier',
  fontFamily: 'Muli, Poppins',
  baseFontSize: '16px',

  // Colors
  background: '#F5F5F5',
  textColor: '#262626',
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
  pageHeadingHeight: 180,

  // Used for navigation bar
  navBarBackground: 'linear-gradient(#e66465, #9198e5)',
  navBarTextColor: '#003B5C',

  // Used in ResponsiveTabs (tab text), Download specimen (title text).
  // Typography: headings.
  brandColor: '#FB542B',

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

  // Patterns
  // checkerboardPatternLight:
  // checkerboardPatternDark:

  // Modular scale ratio that is used to figure out all the different font sizes
  msRatio: 1.3
} 

ReactDOM.render(
  <Catalog
    title='Brave Design System'
    useBrowserHistory={true}
    pages={pages}
    theme={theme}
    specimens={customSpecimens}
  />,
  document.getElementById('catalog')
);
