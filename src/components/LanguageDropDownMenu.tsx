import { useTranslation } from "react-i18next";
import {LanguageDropDownMenuProps} from "types";

export default function LanguageDropDownMenu({
  setMenuOpen,
}: LanguageDropDownMenuProps){
  
  const { t, i18n } = useTranslation();
  console.log(i18n)
  
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  const handleChange = (event: any) => {
    const language = event.target.value;
    changeLanguage(language);
    setMenuOpen(false);
  };

  const options = [
    { value: "en", label: "English" },
    { value: "de", label: "Deutsch" },
    { value: "es", label: "Español" },
  ];

  return (
    <div className="menu-dropdown top-full flex items-center absolute right-0 z-10 md:w-max w-max origin-top-right border-4 text-black md:border-black border-white md:bg-white p-7">
      <select
        onChange={handleChange}
        className="w-32 bg-transparent border-none outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {t(option.label)}
          </option>
        ))}
      </select>
    </div>
  )
}