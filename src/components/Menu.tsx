import React, { useState } from "react";
import InvitationButton from "./InvitationButton";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative flex justify-end">
      <div role="button" className="menu-icon w-10" onClick={toggleMenu}>
        <img src="/images/menu.png" alt="menu-icon" />
      </div>
      {menuOpen && <InvitationButton setMenuOpen={setMenuOpen} />}
    </div>
  );
}
