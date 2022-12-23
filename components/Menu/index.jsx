import { Image } from "../Image";
import Link from "next/link";
import React from "react";
import { PrismicLink } from "@prismicio/react";

export default function Menu({ menu_items: menuItems, logo }) {
  return (
    <div>
      <div className="w-20 h-20 relative">
        <Image
          {...logo}
          width={60}
          // height={60}
          imgixParams={{ sat: -100, fm: "avif" }}
          className="object-contain w-full h-full -mt-3 xl:w-80"
        />
      </div>
      <h1>menu</h1>
      {menuItems.map((item) => (
        <Link key={item.label} href={item.label}>
          <span> {item.label} </span>
        </Link>
      ))}
    </div>
  );
}
