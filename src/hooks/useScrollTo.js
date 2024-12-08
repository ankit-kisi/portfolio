import { useState } from "react";

const useScrollTo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return { handleScroll, isOpen, setIsOpen };
};

export default useScrollTo;
