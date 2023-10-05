import { useTranslation } from "react-i18next";

export default function LanguageSwitcher () {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    changeLanguage(language);
  };

  return (
    <div className="flex flex-row items-center ">
      <label>
        <select
          value={i18n.language}
          onChange={handleChange}
        >
            {Object.keys(i18n.options.resources).map((language: string, i: number) => (
            <option value={language} key={i} role="language">
              {t("language", {lng: language} )}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}