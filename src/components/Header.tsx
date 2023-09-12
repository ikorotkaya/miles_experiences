import React from "react";
import {Menu} from "./Menu";

export default function Header() {
  return (
    <header className="bg-black w-screen">
      <div className="flex justify-between text-white h-24 items-center	my-0 mx-2.5 ">
        <img src="images/miles-logo.svg" alt="miles-logo" className="h-20" />
        <div className="flex justify-between ">
          <Menu />
        </div>
      </div>
    </header>
  );
}
