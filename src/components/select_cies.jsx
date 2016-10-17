import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Breadcrumb from './breadcrumb';
import CieAccordion from './cie_accordion';
import LimeadeTile from './limeade_tile';

class SelectCies extends Component {
  render() {		
    return (
      <div>
        <Breadcrumb />
        <div id="wrapper">
          <p>
            <Link to="/review" className="button">Next</Link>
          </p>
          <div className="cols-7">
            <CieAccordion />
          </div>
          {this.props.editing ? <LimeadeTile /> : ''}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    editing: state.cies.editing 
  };
}

export default connect(mapStateToProps, null)(SelectCies);
