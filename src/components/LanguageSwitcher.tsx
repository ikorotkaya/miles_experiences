import React, { useState } from "react";
import LanguageDropDownMenu from "./LanguageDropDownMenu";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher () {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className="relative flex justify-end mr-6">
      <div role="button" className="menu-icon w-10" onClick={toggleMenu}>
        <img src={t("imageLink")} alt="choose-language" />
      </div>
      {menuOpen && <LanguageDropDownMenu setMenuOpen={setMenuOpen} />}
    </div>
  )
}