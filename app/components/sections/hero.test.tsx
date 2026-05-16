import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Hero } from "./hero";
import { heroIcons } from "./hero-icons";

describe("Hero", () => {
  it("renders hero section with correct id", () => {
    const { container } = render(<Hero />);

    const section = container.querySelector("#hero");
    expect(section).toBeInTheDocument();
    expect(section?.tagName).toBe("SECTION");
  });

  it("displays hero copy", () => {
    render(<Hero />);

    expect(screen.getByRole("heading", { name: "My Name is Yaroslav &" })).toBeInTheDocument();
    expect(screen.getByText("I like animations 🤗")).toBeInTheDocument();
    expect(screen.getByText("Hi")).toBeInTheDocument();
  });

  it("has full screen height", () => {
    const { container } = render(<Hero />);

    const section = container.querySelector("#hero");
    expect(section).toHaveClass("h-screen");
  });

  it("renders the profile image with the cropped hero styling", () => {
    render(<Hero />);

    const image = screen.getByRole("img", { name: "Person Image" });
    expect(image).toHaveAttribute("width", "400");
    expect(image).toHaveAttribute("height", "400");
    expect(image).toHaveClass("h-auto", "w-52", "[clip-path:inset(0_0_0_16px)]");
  });

  it("renders the social icon links", () => {
    render(<Hero />);

    const iconLinks = screen.getAllByRole("link").filter((link) => link.textContent === "");
    expect(iconLinks).toHaveLength(heroIcons.length);
    iconLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "#");
      expect(link).toHaveClass("hover:bg-red-400", "hover:text-white");
    });
  });

  it("renders the contact call to action", () => {
    render(<Hero />);

    const contactLink = screen.getByRole("link", { name: "Talk to me" });
    expect(contactLink).toHaveAttribute("href", "https://t.me/abr_ya");
    expect(contactLink).toHaveClass("bg-[#229ED9]", "hover:bg-[#1d8ec2]");
  });
});
