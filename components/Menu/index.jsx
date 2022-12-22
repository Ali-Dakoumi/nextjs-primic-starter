import { Image } from "../Image";
import Link from "next/link";
import React from "react";

export default function Menu({ menu_items: menuItems, logo }) {
  return (
    <div>
      <Image
        {...logo}
        width={208}
        height={64}
        // className="object-contain w-full h-full -mt-3 xl:w-80"
      />
      <h1>menu</h1>
      {menuItems.map((item) => (
        <Link key={item.label} href={item.label}>
          <span> {item.label} </span>
        </Link>
      ))}
    </div>
  );
}
