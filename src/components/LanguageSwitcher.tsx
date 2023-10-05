import English from "../images/english.svg"

export default function LanguageSwitcher () {
  const handleOnClick = () => {
    console.log("LanguageSwitcher clicked")
  }

  return (
    <div className="flex flex-row justify-between mr-6">
      <button 
        onClick={handleOnClick}>
          <img src={English} alt="English" className="w-8" />
      </button>
    </div>
  )
}