import React, { Component } from 'react';
import { connect } from 'react-redux';
import bourbonModals from '../helpers/bourbon_modals';
import { fetchClients } from '../actions/index';

class ManageClients extends Component {
	componentWillMount() {
		this.props.fetchClients();
	}
	
	componentDidMount() {
		bourbonModals();
	}
	
	renderClients() {
		if (this.props.clients && this.props.clients.data) {
			return this.props.clients.data.map((client) => {
				return (
					<tr key={client.id}>
						<td className="client-name">{client.employername}</td>
						<td className="client-coaching">{client.coaching}</td>
						<td><a href="javascript:void(0)" className="button">Edit</a></td>
					</tr>
				);
			});
		} else {
			return (
				<tr>
					<td className="client-name">Sample Client</td>
					<td className="client-coaching">Yes</td>
					<td><a href="javascript:void(0)" className="button">Edit</a></td>
				</tr>
			);
		}
	}
	
	render() {
		return (
			<div id="wrapper">
				<h3>Admin dashboard - Manage Clients</h3>

				<div className="cols-12">
					<table className="tables">
						<thead>
							<tr>
								<th>Client Name</th>
								<th>Coaching</th>
								<th>Edit</th>
							</tr>
						</thead>
						<tbody>
							{this.renderClients()}
						</tbody>
					</table>
				</div>

				<div className="modal">
					<label htmlFor="modal-add-client">
						<div className="modal-trigger button">Add Client</div>
					</label>
					<input className="modal-state" id="modal-add-client" type="checkbox" />
					<div className="modal-fade-screen">
						<div className="modal-inner">
							<div className="modal-close" htmlFor="modal-add-client"></div>
							<h1>Add Client</h1>
							<div className="modal-content center">
								<label htmlFor="client-name">Employer Name</label><br/><input type="text" id="client-name" className="textbox"></input>
							</div>
							<div className="modal-content center">
								<label htmlFor="PSK">PSK</label><br/><input type="text" id="PSK" className="textbox"></input>
							</div>
							<div className="modal-content center">
								Coaching?<br/><label className="label-switch">
									<input type="checkbox"/>
									<div className="checkbox"></div>
								</label>
							</div>
							<div className="button save-button" htmlFor="modal-add-client">Save</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return { 
    clients: state.clients.all
  };
}

export default connect(mapStateToProps, { fetchClients })(ManageClients);
