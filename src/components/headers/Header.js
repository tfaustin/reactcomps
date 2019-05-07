import React from 'react';
import './header.scss';


function Header() {
  return (
    <div className="header">
     <div className="logo">
       React UI components
     </div>

     <nav className="links">
      <a href="">About</a>
      <a href="">Code</a>
      <a href="">Contact</a>
     </nav>
    </div>
  );
}

export default Header;
