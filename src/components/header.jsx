import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <header className="navigation" role="banner">
      <div className="navigation-wrapper">
        <Link to="/" className="logo">
          <img src="images/logo/ADURO_White_Logos_2015_Horizontal_Mod.png" alt="Logo Image" />
        </Link>
        <ul id="js-navigation-menu" className="navigation-menu show">
          <Link to="" className="navigation-menu-button" id="js-mobile-menu">MENU</Link>
          <nav role="navigation">
            <li className="nav-link">
              <Link to="/">PROJECT ASTERION</Link>
            </li>
            <li id="js-navigation-more" className="nav-link more admin-links"><a href="javascript:void(0)">Load</a>
              <ul className="submenu">
                <li><Link to="/">CIEs</Link></li>
                <li><a href="http://thelibrary.adurolife.com/fragment-0/">Self Report</a></li>
              </ul>
            </li>
            <li className="nav-link">
              <Link to="/create">Create</Link>
            </li>
            <li id="js-navigation-more" className="nav-link more admin-links"><Link to="/admin">Admin</Link>
              <ul className="submenu">
                <li><Link to="/clients">Manage Clients</Link></li>
                <li><Link to="/users">Manage Users</Link></li>
                <li><Link to="/templates">Manage Templates</Link></li>
                <li><Link to="/images">Manage Images</Link></li>                
                <li><a href="javascript:void(0)">Logout</a></li>
              </ul>
            </li>
          </nav>
        </ul>
        <div className="navigation-tools"></div>
      </div>
    </header>
  );
};
