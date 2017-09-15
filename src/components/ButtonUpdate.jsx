import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import updateUserAction from '../actions/updateUserAction.js';

class ButtonUpdate extends React.Component {
	static propTypes = {
		updateReducer: PropTypes.number,
		title: PropTypes.string,
		handleUpdate: PropTypes.func
	}

	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			test: 0
		};
	}

	componentWillReceiveProps(nextProps) {
		console.log('Reducer', nextProps.updateReducer);
	}

	handleClick(type) {
		this.props.handleUpdate(type);
	}

	render() {
		return (
			<div>
				<h5>{this.props.title}: {this.state.count}</h5>
				<button onClick={() => this.handleClick(1)}>Click here to update User 1</button>
				<button onClick={() => this.handleClick(2)}>Click here to update User 2</button>
				<button onClick={() => this.handleClick(3)}>Click here to update User 3</button>
				<br />
			</div>
		);
	}
}

const mapStateToProps = (state)	=>	{
	return {
		updateReducer: state.updateReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleUpdate: type => dispatch(updateUserAction(type))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonUpdate);
