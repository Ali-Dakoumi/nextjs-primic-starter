import { Image } from "../Image";
import Link from "next/link";
import React from "react";

export function Desktop({ menuItems, logo }) {
  return (
    <nav className="hidden md:flex">
      <div className="w-20 h-20 relative">
        <Image
          {...logo}
          width={60}
          // height={60}
          imgixParams={{ fm: "avif" }}
          className="object-contain w-full h-full -mt-3 xl:w-80"
        />
      </div>
      <h1>menu</h1>
      {menuItems.map((item) => (
        <Link key={item.label} href={item.label}>
          <span> {item.label} </span>
        </Link>
      ))}
    </nav>
  );
}
