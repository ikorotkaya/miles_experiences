import { InvitationButtonProps } from "types";

export default function InvitationButton({
  setMenuOpen,
}: InvitationButtonProps) {

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="menu-dropdown top-full flex items-center absolute right-0 z-10 md:w-max w-max origin-top-right border-4 text-black md:border-black border-white md:bg-white bg-[#80DCAC] hover:border-white hover:bg-[#80DCAC] p-7">
      <a
        href="mailto:irina@korotkaya.com?subject=Interview request from your portfolio website&body=Hi Irina, I would like to invite you for an interview."
        className="menu-dropdown__link block md:text-3xl text-2xl"
        data-testid="menu-dropdown__link"
        onClick={closeMenu}
      >
        Invite Irina for an interview! 📧
      </a>
    </div>
  );
}
