import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Introduction",
    content: pageLoader(() => import("./content/welcome/index.md"))
  }
];

const theme = {
  pageHeadingHeight: '106px'
}

ReactDOM.render(
  <Catalog
    title="Brave UI System"
    useBrowserHistory={true}
    pages={pages}
    theme={theme}
  />,
  document.getElementById("catalog")
);
