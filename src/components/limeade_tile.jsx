import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCie } from '../actions/index';
import LimeadeTileModals from '../components/limeade_tile_modals';
import trumbowygScripts from '../helpers/trumbowyg_scripts';

class LimeadeTile extends Component {
	componentDidMount() {
    trumbowygScripts();
	}
	
	getCieById(id) {
		let selectedCie = null;
		this.props.cies.map((cie) => {
			if (cie.incentive_id === id) {
				selectedCie = cie;
			}
		});
		return selectedCie;
	}
	
	handleDescriptionUpdate(event, cie) {
		this.props.updateCie({
			...cie,
			more_information: event.target.innerHTML
		});
	}
	
	render() {
		let cie = this.getCieById(this.props.editing);
		
		return (
			<div className="cols-5 tile-container" id="select-CIE-edit">

				<div className="limeade-tile">
					<div className="limeade-image">
						<img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=Placeholder%20Image&w=440&h=220" alt="Limeade tile image" width="440px" />
					</div>
					<div className="limeade-more-info">
						<span className="limeade-points">{cie.points || '0'} pts</span>
						<span className="limeade-title">{cie.title || 'Complete Your Well-Being Assessment' }</span>
					</div>
					<div 
						className="limeade-description" 
						dangerouslySetInnerHTML={{ __html: cie.more_information }}
						onBlur={(event) => this.handleDescriptionUpdate(event, cie)}></div>
					<div className="limeade-info-actions">
						<div className="limeade-button-container">
							<button className="limeade-button">Close</button>
						</div>
					</div>
				</div>
					
				<LimeadeTileModals />
						
			</div>  
		);
	}
}

function mapStateToProps(state) {
  return { 
    cies: state.cies.selected,
    editing: state.cies.editing
  };
}

export default connect(mapStateToProps, { updateCie })(LimeadeTile);
