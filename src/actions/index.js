import axios from 'axios';

export const ADD_CIE = 'ADD_CIE';
export const REMOVE_CIE = 'REMOVE_CIE';
export const EDIT_CIE = 'EDIT_CIE';
export const UPDATE_CIE = 'UPDATE_CIE';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_CATEGORIES = 'ADD_CATEGORIES';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const CLEAR_CATEGORIES = 'CLEAR_CATEGORIES';
export const FETCH_TEMPLATES = 'FETCH_TEMPLATES';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_CLIENTS = 'FETCH_CLIENTS';
export const FETCH_IMAGES = 'FETCH_IMAGES';
export const SAVE_USER = 'SAVE_USER';

export function fetchTemplates() {
  const url = '/api/v1/template/versioned';
  const request = axios.get(url);
  
  return {
    type: FETCH_TEMPLATES,
    payload: request
  };
}

export function fetchUsers() {
  const url = '/api/v1/user/';
  const request = axios.get(url);
  
  return {
    type: FETCH_USERS,
    payload: request
  };
}

export function fetchClients() {
	const url = '/api/v1/client/';
	const request = axios.get(url);
	
	return {
		type: FETCH_CLIENTS,
		payload: request
	};
}

export function fetchImages() {
	const url = '/api/v1/image/';
	const request = axios.get(url);
	
	return {
		type: FETCH_IMAGES,
		payload: request
	};
}

export function saveUser(user) {
  const url = '/api/v1/package/to_limeade';
  const request = axios.post(url, user);

  return {
    type: SAVE_USER,
    payload: request
  };
}

export function addCie(cie) {
  return {
    type: ADD_CIE,
    cie
  };
}

export function removeCie(id) {
  return {
    type: REMOVE_CIE,
    id
  };
}

export function editCie(id) {
  return {
    type: EDIT_CIE,
    id
  };
}

export function updateCie(cie) {
	return {
		type: UPDATE_CIE,
		cie
	};
}

export function addCategory(category) {
	return {
		type: ADD_CATEGORY,
		category
	};
}

export function addCategories(categories) {
	return {
		type: ADD_CATEGORIES,
		categories
	};
}

export function removeCategory(category) {
	return {
		type: REMOVE_CATEGORY,
		category
	};
}

export function clearCategories() {
	return {
		type: CLEAR_CATEGORIES
	};
}
