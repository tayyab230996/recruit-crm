import React from 'react';
import './LeftSideBar.css';

const LeftSideBar = () => {
  return (
    <aside className="left-sidebar">
      <ul className="sidebar-menu">
        <li className="menu-item active">
          <i className="icon icon-user"></i>
        </li>
        <li className="menu-item">
          <i className="icon icon-building"></i>
        </li>
        <li className="menu-item">
          <i className="icon icon-certificate"></i>
        </li>
        <li className="menu-item">
          <i className="icon icon-briefcase"></i>
        </li>
        <li className="menu-item">
          <i className="icon icon-envelope"></i>
        </li>
        <li className="menu-item">
          <i className="icon icon-calendar"></i>
        </li>
        <li className="menu-item">
          <i className="icon icon-dollar-sign"></i>
        </li>
        <li className="menu-item">
          <i className="icon icon-clock"></i>
        </li>
        <li className="menu-item">
          <i className="icon icon-credit-card"></i>
        </li>
        <li className="menu-item">
          <i className="icon icon-cog"></i>
        </li>
        <li className="menu-item">
          <i className="icon icon-ellipsis"></i>
        </li>
      </ul>
    </aside>
  );
};

export default LeftSideBar;
