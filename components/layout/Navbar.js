import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <div className="navbar">
    <div className="navbar__menu-button">
    <i className='bx bx-menu'></i>
    </div>

    <div className="navbar__menu-logo">
    <i className='bx bx-pulse'></i>
    </div>
    
    <div className="navbar__menu-user">
    <i className='bx bx-user'></i>
    </div>
    
   </div>
  );
};

export default Navbar;
