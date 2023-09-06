import React, { useState } from "react";

const sections = [
  { id: "about", text: "About" },
  { id: "experiences", text: "Experiences" },

];

export function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="mobile-navbar relative flex items-center justify-end ">
      <div className="mobile-navbar__menu-icon w-10 " onClick={toggleMenu}>
        <img src="/images/menu.png" alt="menu-icon" />
      </div>
      {menuOpen && (
        <div className="mobile-navbar__menu-dropdown">
          {sections.map((section) => (
            <a
              className="navbar__link"
              onClick={closeMenu}
              key={section.id}
              href={`#${section.id}`}
            >
              {section.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
