import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addCategories, clearCategories } from '../actions/index';

class StartWithSuite extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: null };
		this.props.clearCategories();		
  }
	
	handleSelectionClick(event) {
		this.setState({ selected: event.target.innerHTML });
	}
	
	handleSubmitClick(event) {
		switch (this.state.selected) {
			case 'Standard (with coaching)':
				this.props.addCategories(['defaults', 'screening', 'assessment', 'coaching']);
				break;
			case 'Outcomes Lite (with coaching)':
				this.props.addCategories(['defaults', 'screening', 'assessment', 'coaching', 'outcomes']);
				break;
			case 'Standard (no coaching)':
				this.props.addCategories(['defaults', 'screening', 'assessment']);
				break;
			case 'Outcomes Lite (no coaching)':
				this.props.addCategories(['defaults', 'screening', 'assessment', 'outcomes']);
				break;
			case 'Full Outcomes/RAS':
				this.props.addCategories(['defaults', 'screening', 'assessment', 'coaching', 'outcomes', 'ras']);
				break;
		}
	}
	
	render() {
    return (
      <div>
        <p>Select template</p>
        <div className="dropdown">
          <div className="dropdown-container">
            <p className="dropdown-button" id="selected-suite">Click to Select</p>
            <ul className="dropdown-menu dropdown-select" onClick={this.handleSelectionClick.bind(this)}>
              <li>Standard (with coaching)</li>
              <li>Outcomes Lite (with coaching)</li>
              <li>Standard (no coaching)</li>
              <li>Outcomes Lite (no coaching)</li>
              <li>Full Outcomes/RAS</li>
            </ul>
          </div>
        </div>
        <p>
          <Link to="/select" className="button" onClick={this.handleSubmitClick.bind(this)}>Get started</Link>
        </p>
      </div>
    );
	}
}

export default connect(null, { addCategories, clearCategories })(StartWithSuite);
