import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/index';

class ManageImages extends Component {
  componentWillMount() {
    this.props.fetchImages();
  }	
	
	renderImages() {
		if (this.props.images && this.props.images.data) {
			return this.props.images.data.map((image) => {
				return (
					<tr key={image.id}>
						<td className="client-name">{image.title}</td>
						<td className="client-coaching">{image.updated_by_user_name}</td>
						<td className="client-coaching">{image.updated_date}</td>
						<td><a href="javascript:void()" className="button">Edit</a></td>
					</tr>
				);
			});
		} else {
			return (
				<tr>
					<td className="client-name">Sample Image</td>
					<td className="client-coaching">Sample User</td>
					<td className="client-coaching">1970-01-01 00:00:00</td>
					<td><a href="javascript:void()" className="button">Edit</a></td>
				</tr>
			);
		}
	}
	
	render() {   
    return (
			<div id="wrapper">
				<h3>Admin dashboard - Manage Images</h3>

				<div className="cols-12">
					<table className="tables">
						<thead>
							<tr>
								<th>Title</th>
								<th>Added By</th>
								<th>Added Date</th>
								<th>Edit</th>
							</tr>
						</thead>
						<tbody>
							{this.renderImages()}
						</tbody>
					</table>
				</div>
			</div>
    );
	}
}

function mapStateToProps(state) {
  return { 
    images: state.images.all
  };
}

export default connect(mapStateToProps, { fetchImages })(ManageImages);
