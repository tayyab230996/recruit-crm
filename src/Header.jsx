import React from "react";
import "./Header.css";


const Header = () => {
  return (
    <header className="header">
      <input
        type="text"
        placeholder="Search Pipedrive"
        className="search-input"
      />
      <div className="header-right">
        <img src="recruit_crm_logo.png" alt="Recruit CRM" className="logo" />
        <img src="user_avatar.png" alt="User Avatar" className="user-avatar" />
      </div>
      <div>
        
      </div>
    </header>
  );
};

export default Header;
