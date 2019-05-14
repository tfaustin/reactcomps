import React from 'react';
import './sidemenu-1.scss';


function sidemenu1() {
  return (
    <div className="sidemenu1">
      <nav className="links">
      <div className="link-item">
        <a href=""> 
          <i class="fas fa-route"></i>
          <span>Navigations</span>  
        </a>
      </div>
      <div className="link-item">
        <a href=""> 
          <i class="fas fa-align-left"></i>
          <span>Side Menus</span>  
        </a>
      </div>
      <div className="link-item">
        <a href=""> 
          <i class="fas fa-user"></i>
          <span>User Profiles</span>  
        </a>
      </div>
      <div className="link-item">
        <a href=""> 
          <i class="fas fa-unlock-alt"></i>
          <span>Sign In/Sign up forms</span>  
        </a>
      </div>
      <div className="link-item">
        <a href=""> 
          <i class="fas fa-align-justify"></i>
          <span>CRUD Form</span>  
        </a>
      </div>
      <div className="link-item">
        <a href=""> 
          <i class="fas fa-table"></i>
          <span>Data Tables</span>  
        </a>
      </div>
      <div className="link-item">
        <a href=""> 
          <i class="fas fa-address-card"></i>
          <span>Cards</span>  
        </a>
      </div>
     </nav>
    </div>
  );
}

export default sidemenu1;
