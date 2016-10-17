import React from 'react';
import { Link } from 'react-router';
import StartWithSuite from './start_with_suite';

export default () => {
  return (
    <ul className="accordion-tabs">
          
      <li className="tab-header-and-content">
        <a href="javascript:void(0)" className="is-active tab-link">Configure from Template</a>
        <div className="tab-content">
          <StartWithSuite />
        </div>
      </li>

      <li className="tab-header-and-content">
        <a href="javascript:void(0)" className="tab-link">Configure Manually</a>
        <div className="tab-content">
          <div>
            <p>Coaching?</p>
            <label className="label-switch">
              <input type="checkbox" />
              <div className="checkbox"></div>
            </label>
          </div>
          <div>
            <p>Outcomes?</p>
            <label className="label-switch">
              <input type="checkbox" />
              <div className="checkbox"></div>
            </label>
          </div>
          <p>
            <Link to="/select" className="button">Get started</Link>
          </p>
        </div>
      </li>

      <li className="tab-header-and-content">
        <a href="javascript:void(0)" className="tab-link">Modify Client</a>
        <div className="tab-content">
          <p>Search client</p>
          <form className="search-bar" role="search">
            <input type="search" placeholder="Enter Search" />
            <button type="submit">
              <img src="images/search-icon-black.png" alt="Search Icon" />
            </button>
          </form>
          <p>[Client list based on search]</p>
          <Link to="/modify" className="button">Get started</Link>
        </div>
      </li>
        
    </ul>
  );
};
