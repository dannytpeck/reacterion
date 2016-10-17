/* globals $ */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breadcrumb from './breadcrumb';

class ReviewCies extends Component {
	renderCies() {
		return this.props.cies.map((cie) => {
			return (
				<div className="cols-6 tile-container" key={cie.id}>
          <div className="limeade-tile">
            <div className="limeade-image">
							<img src={cie.image_url || 'https://placeholdit.imgix.net/~text?txtsize=33&txt=Placeholder%20Image&w=440&h=220'} alt="Limeade tile image" width="440px" />
            </div>
            <div className="limeade-more-info">
              <span className="limeade-points"><span style={{ fontWeight: 'bold' }}>200</span> pts</span>
              <span className="limeade-title">{cie.title}</span>
            </div>
            <div className="limeade-description" style={{ height: '100px', overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: cie.more_information }}></div>
            <div className="limeade-info-actions">
              <div className="limeade-button-container">
                {cie.button_text ?
								<button className="limeade-button"><a href={cie.button_url} target="_new">${cie.button_text}</a></button> :
								<button className="limeade-button">Close</button>}
              </div>
            </div>
          </div>
				</div>
			);
		});
	}
  
  render() {
    return (
      <div>
        <Breadcrumb />
        <div id="wrapper">
					{this.renderCies()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	console.log(state);
	return {
		cies: state.cies.selected
	};
}

export default connect(mapStateToProps, null)(ReviewCies);
