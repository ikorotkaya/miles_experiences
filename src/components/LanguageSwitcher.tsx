import React, { useState, useEffect } from "react";
import LanguageDropDownMenu from "./LanguageDropDownMenu";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher () {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (!menuOpen) return;
      if (menuOpen && !target.closest(".menu-icon")) setMenuOpen(false);
    });
  }, [menuOpen]);
  
  return (
    <div className="relative flex items-center justify-end mr-6">
      <div role="button" className="menu-icon w-7" onClick={toggleMenu}>
        <img src={t("imageLink")} alt="choose-language" />
      </div>
      {menuOpen && <LanguageDropDownMenu setMenuOpen={setMenuOpen} />}
    </div>
  )
}