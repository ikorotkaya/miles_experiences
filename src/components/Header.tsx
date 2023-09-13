import React from "react";
import {Menu} from "./Menu";

export default function Header() {
  return (
    <header className="bg-black w-full row-start-1 col-start-1 col-span-2">
      <div className="h-full flex justify-between text-white items-center	mx-2.5 ">
        <img src="images/miles-logo.svg" alt="miles-logo" className="h-20" />
        <div className="flex justify-between ">
          <Menu />
        </div>
      </div>
    </header>
  );
}
