import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import LanguageButton from "./LanguageSwitcher";

export default function Header() {
  return (
    <header id="header" className="bg-black w-full row-start-1 col-start-1 col-span-2 md:border-b-2 md:border-white">
      <div className="h-full flex justify-between text-white items-center	mx-2.5">
        <Logo />
        <div className="flex justify-between">
          <LanguageButton />
          <Menu />
        </div>
      </div>
    </header>
  );
}
