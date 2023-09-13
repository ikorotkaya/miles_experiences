import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black w-full row-start-3 col-start-1 col-span-2">
      <div className="h-full flex text-zinc-500 text-xl items-center mx-2.5 pl-px ">
        Made with {" "}
        <img
          draggable="false"
          className="w-6 h-6 px-1 font-ibmplexmono-regular  "
          alt="❤️"
          src="https://twemoji.maxcdn.com/v/13.0.2/svg/2764.svg"
        /> {" "}
        by Irina Korotkaya for MILES Mobility GmbH in 2023
      </div>
    </footer>
  );
}
