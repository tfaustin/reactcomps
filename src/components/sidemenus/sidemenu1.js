import React from 'react';
import './sidemenu-1.scss';


function sidemenu1() {
  return (
    <div className="sidemenu1">
      <nav className="links">
      <div className="link-item">
      <a href=""> 
      <i class="fas fa-tachometer-alt"></i>
      <span>Navigations</span>  
      </a>
      </div>
      <a href="">Side Menus</a>
      <a href="">User Profiles</a>
      <a href="">Sign In forms</a>
      <a href="">Sign ups forms</a>
      <a href="">CRUD Form</a>
      <a href="">Data Tables</a>
      <a href="">Data Visualization</a>
      <a href="">Cards</a>
     </nav>
    </div>
  );
}

export default sidemenu1;
