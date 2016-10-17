import React, { Component } from 'react';
import { connect } from 'react-redux';
import bourbonModals from '../helpers/bourbon_modals';
import { fetchUsers, saveUser } from '../actions/index';

class ManageUsers extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }
  
	componentDidMount() {
    bourbonModals();
	}
	
  handleSaveClick() {
    let user = {
      firstname: 'Foo',
      lastname: 'Bar',
      email: 'foobar@adurolife.com',
      role_id: '2'
    };
    
    this.props.saveUser(user);
  }
  
	renderUsers() {
		if (this.props.users && this.props.users.data) {
			return this.props.users.data.map((user) => {
				return (
					<tr key={user.id}>
						<td className="user-first-name">{user.firstname}</td>
						<td className="user-last-name">{user.lastname}</td>
						<td className="user-email">{user.email}</td>
						<td className="user-role">{user.role_name}</td>
						<td><a href="javascript:void(0)" className="button">Edit</a></td>
					</tr>
				);
			});
		} else {
			return (
				<tr>
					<td className="user-first-name">Sample</td>
					<td className="user-last-name">User</td>
					<td className="user-email">sample.user@adurolife.com</td>
					<td className="user-role">2</td>
					<td><a href="javascript:void(0)" className="button">Edit</a></td>
				</tr>
			);
		}
	}	
	
	render() {
		return (
			<div>
				<div id="wrapper">		
          <div style={{ float: 'right' }} className="button" onClick={() => this.handleSaveClick()}>Post Test</div>   
					
					<h3>Admin dashboard - Manage Users</h3>

					<div className="cols-12">
						<table className="tables">
							<thead>
								<tr>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Email</th>
									<th>Role</th>
									<th>Edit</th>
								</tr>
							</thead>
							<tbody>
								{this.renderUsers()}
							</tbody>
						</table>
					</div>       
          
					<div className="modal">
						<label htmlFor="modal-add-user">
							<div className="modal-trigger button">Add User</div>
						</label>
						<input className="modal-state" id="modal-add-user" type="checkbox" />
						<div className="modal-fade-screen">
							<div className="modal-inner">
								<div className="modal-close" htmlFor="modal-add-user"></div>
								<h1>Add User</h1>
								<div className="modal-content center">
									<label htmlFor="user-first-name">First Name</label><br/><input type="text" id="user-first-name" className="textbox" />
								</div>
								<div className="modal-content center">
									<label htmlFor="user-last-name">Last Name</label><br/><input type="text" id="user-last-name" className="textbox" />
								</div>
								<div className="modal-content center">
									<label htmlFor="user-email">Email</label><br/><input type="text" id="user-email" className="textbox" />
								</div>
								<div className="modal-content center">
									<label htmlFor="wrike-id">Wrike ID</label><br/><a id="wrike-id" className="button">Check for Wrike ID</a>
								</div>
								<div className="modal-content center">
									<label htmlFor="user-role">Role</label><br/><input type="text" id="user-role" className="textbox" />
								</div>
								<div className="modal-content center">
									<label htmlFor="user-permissions">Permission Set</label><br/><input type="text" id="user-permissions" className="textbox" />
								</div>
								<div className="button save-button" htmlFor="modal-add-user">Save</div>
							</div>
						</div>
          </div>
					
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return { 
    users: state.users.all
  };
}

export default connect(mapStateToProps, { fetchUsers, saveUser })(ManageUsers);
