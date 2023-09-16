import React from "react";
import {Menu} from "./Menu";

export default function Header() {
  return (
    <header id="header" className="bg-black w-full row-start-1 col-start-1 col-span-2 md:border-b-2 md:border-white">
      <div className="h-full flex justify-between text-white items-center	mx-2.5">
        <img src="images/miles-logo.svg" alt="miles-logo" className="md:h-20 h-16" />
        <div className="flex justify-between">
          <Menu />
        </div>
      </div>
    </header>
  );
}
