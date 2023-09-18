import Menu from "./Menu";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Menu", () => {
  test("there is a menu button", () => {
    render(<Menu />);
    const menuButton = screen.getByRole("button");
    expect(menuButton).toBeInTheDocument();
  });

  test('initially the menu is closed', () => {
    render(<Menu />);
    const menuDropdown = screen.queryByTestId("menu-dropdown__link");
    expect(menuDropdown).not.toBeInTheDocument();
  });

  test('the menu opens when the menu icon is clicked', () => {
    render(<Menu />);
    const menuButton = screen.getByRole("button");
    fireEvent.click(menuButton);
    const menuDropdown = screen.getByTestId("menu-dropdown__link");
    expect(menuDropdown).toBeInTheDocument();
  });

  test('check if there is an email link in the dropdown menu', () => {
    render(<Menu />);
    const menuButton = screen.getByRole("button");
    fireEvent.click(menuButton);
    const menuDropdown = screen.getByTestId("menu-dropdown__link");
    expect(menuDropdown).toHaveAttribute("href", "mailto:irina@korotkaya.com?subject=Interview request from your portfolio website&body=Hi Irina, I would like to invite you for an interview.");
  });
});
