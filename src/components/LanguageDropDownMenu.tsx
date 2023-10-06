import { useTranslation } from "react-i18next";
import { LanguageDropDownMenuProps } from "types";

export default function LanguageDropDownMenu({
  setMenuOpen,
}: LanguageDropDownMenuProps){
  
  const { t, i18n } = useTranslation();
  console.log(i18n.languages)
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  const handleChange = (language: string ) => {
    changeLanguage(language);
    setMenuOpen(false);
  };

  const availableLanguages = typeof i18n.options.resources === "object" ? Object.keys(i18n.options.resources) : [];

  return (
    <div className="menu-dropdown top-full flex flex-col items-center absolute right-0 z-10 md:w-max w-max origin-top-right border-4 text-black md:border-black border-white md:bg-white ">
      {availableLanguages.map((language) => (
        <div className="flex flex-col items-center justify-center cursor-pointer hover:bg-[#80DCAC] p-2 w-24"
          key={language}
          onClick={() => handleChange(language)}
          >
          {t(language)}
        </div>
      ))}
    </div>
  )
}