import { useState, useEffect } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import useScrollTo from "../hooks/useScrollTo";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsSticky(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { handleScroll, isOpen, setIsOpen } = useScrollTo();

  return (
    <header
      className={`${
        isSticky ? "bg-white" : "bg-transparent"
      } fixed py-4 px-10 top-0 w-full z-50 left-0 right-0`}
    >
      <nav className="flex justify-between items-center relative  container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
        {/* Logo or Brand Name */}
        <div
          className="text-3xl font-semibold cursor-pointer font-jost"
          onClick={() => handleScroll("home")}
        >
          SANDHYA
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex space-x-8 group ">
          <li>
            <button
              onClick={() => handleScroll("home")}
              className="hover:text-orange hover:underline hover:underline-offset-8 font-jost"
            >
              HOME
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("about")}
              className="hover:text-orange hover:underline hover:underline-offset-8 font-jost"
            >
              ABOUT
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("skills")}
              className="hover:text-orange hover:underline hover:underline-offset-8 font-jost"
            >
              SKILLS
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("portfolio")}
              className="hover:text-orange hover:underline hover:underline-offset-8 font-jost"
            >
              PORTFOLIO
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("contact")}
              className="hover:text-orange hover:underline hover:underline-offset-8 font-jost"
            >
              CONTACT
            </button>
          </li>
        </ul>

        {/* Contact Button (Desktop) */}
        <button
          className="hidden lg:block btn-primary font-jost"
          onClick={() => handleScroll("contact")}
        >
          CONTACT NOW
        </button>

        {/* Menu Icon for Mobile */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen ? true : !isOpen)}
        >
          <HiBars3BottomRight className="size-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <button
                onClick={() => handleScroll("home")}
                className="hover:text-blue-500"
              >
                HOME
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("brands")}
                className="hover:text-blue-500"
              >
                BRANDS
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("about")}
                className="hover:text-blue-500"
              >
                ABOUT
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("skills")}
                className="hover:text-blue-500"
              >
                SKILLS
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScroll("contact");
                }}
                className="hover:text-blue-500"
              >
                CONTACT
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
