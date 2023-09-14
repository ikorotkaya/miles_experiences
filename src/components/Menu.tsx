import React, { useState } from "react";

export function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative flex justify-end">
      <div className="menu-icon w-10" onClick={toggleMenu}>
        <img src="/images/menu.png" alt="menu-icon" />
      </div>
      {menuOpen && (
        <div className="menu-dropdown top-full flex items-center absolute right-0 z-10 w-96 origin-top-right border-4 text-black border-black bg-white hover:border-white hover:bg-[#80DCAC] py-4 px-4 flex-col">
          {/* set one anchor with email link with text "invite Irina for an interview" as a dropdown menu item */}
          <a
            href="mailto:irina@korotkaya.com
            ?subject=Interview request from your portfolio website
            &body=Hi Irina, I would like to invite you for an interview."
            className="menu-dropdown__item block text-3xl"
            onClick={closeMenu}
          >
            Invite Irina for an interview!
          </a>
        </div>
      )}
    </div>
  );
}
