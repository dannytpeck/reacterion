import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTemplates } from '../actions/index';

class ManageTemplates extends Component {
  componentWillMount() {
    this.props.fetchTemplates();
  }	
	
	renderTemplates() {
		if (this.props.templates && this.props.templates.data) {
			return this.props.templates.data.map((template) => {
				return (
					<tr key={template.id}>
						<td className="client-name">{template.title}</td>
						<td className="client-coaching">{template.incentive_id}</td>
						<td className="client-coaching">{template.created_by_user_name}</td>
						<td className="client-coaching">{template.created_date}</td>
						<td className="client-coaching">{template.versions}</td>
						<td><a href="javascript:void()" className="button">Edit</a> <a href="javascript:void()" className="button">View Versions</a></td>
					</tr>
				);
			});
		} else {
			return (
				<tr>
					<td className="client-name">Sample Template</td>
					<td className="client-coaching">123</td>
					<td className="client-coaching">Sample User</td>
					<td className="client-coaching">1970-01-01 00:00:00</td>
					<td className="client-coaching">3</td>
					<td><a href="javascript:void()" className="button">Edit</a> <a href="javascript:void()" className="button">View Versions</a></td>
				</tr>
			);
		}
	}
	
	render() {   
    return (
			<div id="wrapper">
				<h3>Admin dashboard - Manage Templates</h3>

				<div className="cols-12">
					<table className="tables">
						<thead>
						<tr>
							<th>Title</th>
							<th>Incentive ID</th>
							<th>Last Updated By</th>
							<th>Last Updated Date</th>
							<th>Versions</th>
							<th>Edit/Browse Versions</th>
						</tr>
						</thead>
						<tbody>
							{this.renderTemplates()}
						</tbody>
					</table>
				</div>
			</div>
    );
	}
}

function mapStateToProps(state) {
  return { 
    templates: state.templates.all
  };
}

export default connect(mapStateToProps, { fetchTemplates })(ManageTemplates);
