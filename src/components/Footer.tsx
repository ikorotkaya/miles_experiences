import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black w-screen">
      <div className="flex text-zinc-500 text-xl h-24 items-center my-0 mx-2.5 pl-px ">
        Made with {" "}
        <img
          draggable="false"
          className="w-6 h-6 px-1"
          alt="❤️"
          src="https://twemoji.maxcdn.com/v/13.0.2/svg/2764.svg"
        /> {" "}
        by Irina Korotkaya for MILES Mobility GmbH in 2023
      </div>
    </footer>
  );
}
