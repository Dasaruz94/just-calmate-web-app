import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <div className="navbar">
    <div className="navbar__menu-button">
    <i class='bx bx-menu'></i>
    </div>

    <div className="navbar__menu-logo">
    <i class='bx bx-pulse'></i>
    </div>
    
    <div className="navbar__menu-user">
    <i class='bx bx-user'></i>
    </div>
    
   </div>
  );
};

export default Navbar;
