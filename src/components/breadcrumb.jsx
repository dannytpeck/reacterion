import React, { Component } from 'react';
import { Link } from 'react-router';

class Breadcrumb extends Component {
  
  render() {
    let links = [<Link to="/" key="begin">Begin</Link>];
    
    switch (window.location.pathname) {
      case '/select':
        links.push(<Link to="/select" key="select">Select</Link>);
        break;
        
      case '/review':
        links.push(<Link to="/select" key="select">Select</Link>);
        links.push(<Link to="/review" key="review">Review</Link>);
        break;
    } 
    
    return (
      <div className="breadcrumb">
        {links}
      </div>
    );
  }
  
}

export default Breadcrumb;
