import React from "react";
import { Seo } from "../SEO";
import Menu from "../Menu/index";

export const Layout = ({ seo, menu, children }) => (
  <div className="relative">
    <Seo {...seo} />
    <Menu {...menu.data} />
    <main>{children}</main>
  </div>
);
