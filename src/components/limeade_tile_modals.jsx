import React, { Component } from 'react';
import bourbonModals from '../helpers/bourbon_modals';

class LimeadeTileModals extends Component {
	componentDidMount() {
		bourbonModals();
	}
	
	render() {
		return (
			<div>
				<div className="modal">
					<label htmlFor="modal-add-targeting">
						<div className="modal-trigger button">Add Targeting</div>
					</label>
					<input className="modal-state" id="modal-add-targeting" type="checkbox" />
					<div className="modal-fade-screen">
						<div className="modal-inner">
							<div className="modal-close" htmlFor="modal-add-targeting"></div>
							<h1>Add Targeting</h1>
							<div className="modal-content center">
								<label htmlFor="targeting-subgroup">Subgroup</label><br/>
								<input type="text" id="targeting-subgroup" className="textbox" />
							</div>
							<div className="modal-content center">
								<label htmlFor="targeting-demographic-1">Targeting 1</label><br/>
								<input type="text" id="targeting-demographic-1" className="textbox" />
							</div>
							<div className="modal-content center">
								<label htmlFor="targeting-demographic-2">Targeting 2</label><br/>
								<input type="text" id="targeting-demographic-2" className="textbox" />
							</div>
							<div className="modal-content center">
								<label htmlFor="targeting-demographic-3">Targeting 3</label><br/>
								<input type="text" id="targeting-demographic-3" className="textbox" />
							</div>
							<div className="button save-button" htmlFor="modal-add-targeting">Save</div>
						</div>
					</div>
				</div>
				<div className="modal">
					<label htmlFor="modal-add-configuration">
						<div className="modal-trigger button">Add Configuration</div>
					</label>
					<input className="modal-state" id="modal-add-configuration" type="checkbox" />
					<div className="modal-fade-screen">
						<div className="modal-inner">
							<div className="modal-close" htmlFor="modal-add-configuration"></div>
							<h1>Add Configuration</h1>
							<div className="modal-content center">
								<label htmlFor="configuration-max-occur">Max Occurrence</label><br/>
								<input type="text" id="configuration-max-occur" className="textbox" />
							</div>
							<div className="modal-content center">
								<label htmlFor="configuration-same-day">Allow Same Day</label><br/>
								<input type="text" id="configuration-same-day" className="textbox" />
							</div>
							<div className="modal-content center">
								<label htmlFor="configuration-ongoing">Is Ongoing?</label><br/>
								<input type="text" id="configuration-ongoing" className="textbox" />
							</div>
							<div className="modal-content center">
								<label htmlFor="configuration-show">Show in Program?</label><br/>
								<input type="text" id="configuration-show" className="textbox" />
							</div>
							<div className="modal-content center">
								<label htmlFor="configuration-disabled">Is Disabled?</label><br/>
								<input type="text" id="configuration-disabled" className="textbox" />
							</div>
							<div className="modal-content center">
								<label htmlFor="configuration-notify">Notify?</label><br/>
								<input type="text" id="configuration-notify" className="textbox" />
							</div>
							<div className="button save-button" htmlFor="modal-add-configuration">Save</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default LimeadeTileModals;
