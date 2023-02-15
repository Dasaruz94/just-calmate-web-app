import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <Navbar />
    </header>
  );
};

export default Header;
