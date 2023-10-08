import React, { useEffect, useState } from "react";
import InvitationButton from "./InvitationButton";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (!menuOpen) return;
      if (menuOpen && !target.closest(".menu-icon")) setMenuOpen(false);
    });
  }, [menuOpen]);

  return (
    <div className="relative flex justify-end">
      <div role="button" className="menu-icon w-10" onClick={toggleMenu}>
        <img src="/images/menu.png" alt="menu-icon" />
      </div>
      {menuOpen && <InvitationButton setMenuOpen={setMenuOpen} />}
    </div>
  );
}
