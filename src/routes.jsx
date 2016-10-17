import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MainIndex from './components/main_index';
import SelectCies from './components/select_cies';
import ReviewCies from './components/review_cies';
import ModifyCies from './components/modify_cies';
import AdminDashboard from './components/admin_dashboard';
import ManageClients from './components/manage_clients';
import ManageUsers from './components/manage_users';
import ManageTemplates from './components/manage_templates';
import ManageImages from './components/manage_images';
import NotFound from './components/not_found';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={MainIndex} />
		
		<Route path="select" component={SelectCies} />
		<Route path="review" component={ReviewCies} />
		<Route path="modify" component={ModifyCies} />
		
		<Route path="admin" component={AdminDashboard} />
		<Route path="clients" component={ManageClients} />
		<Route path="users" component={ManageUsers} />
		<Route path="templates" component={ManageTemplates} />
		<Route path="images" component={ManageImages} />

		<Route path="*" component={NotFound} />
	</Route>
);
