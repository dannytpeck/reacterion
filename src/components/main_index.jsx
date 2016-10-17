import React, { Component } from 'react';
import Breadcrumb from './breadcrumb';
import AccordionTabs from './accordion_tabs';
import bourbonScripts from '../helpers/bourbon_scripts';

class MainIndex extends Component {
  componentDidMount() {
    bourbonScripts();
  }
  
  render() {
    return (
      <div>
        <Breadcrumb />
        <div id="wrapper">
          <h3>Project Asterion: CIE and Verified Challenge Generator</h3>
          <AccordionTabs />
        </div>
      </div>
    );
  }
}

export default MainIndex;
