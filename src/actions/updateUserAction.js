import types from '../constants';
import updateUserApi from '../apis/updateUserApi.js';

export function requestUpdate() {
	return {
		type: types.REQUEST_UPDATE
	};
}

export function updateSuccess(payload) {
	return {
		type: types.UPDATE_SUCCESS,
		payload
	};
}

export function updateError(payload) {
	return {
		type: types.UPDATE_ERROR,
		payload
	};
}

const updateUserAction = (type) => {
	return (dispatch) => {
		dispatch(requestUpdate());
		return updateUserApi(type)
			.then(result => dispatch(updateSuccess(result)))
			.catch(error => dispatch(updateError(error)));
	};
};

export default updateUserAction;
