import React from "react"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import updateUserAction from "../actions/updateUserAction.js"

class ButtonUpdate extends React.Component {
 	constructor(props) {
		super(props);
		this.state = {
      count:0,
      test:0
		}
	}

	handleClick(type) {
     this.props.handleUpdate(type)
	}

 componentWillReceiveProps(nextProps) {
 		console.log("Reducer",nextProps.updateReducer)
	}

	render() {
   	return (
			<div>
				<h5>{this.props.title}: {this.state.count}</h5>
  			<button onClick={() => this.handleClick(1)}>Click here to update User 1</button>
				<button onClick={() => this.handleClick(2)}>Click here to update User 2</button>
        <button onClick={() => this.handleClick(3)}>Click here to update User 3</button>
        <br/>
      </div>
		)
	}
}

const mapStateToProps = (state,ownProps) => {
  return {
    updateReducer:state.updateReducer
	}
}

const mapDispatchToProps = (dispatch,ownProps) => {
	return {
    	handleUpdate:(type) => dispatch(updateUserAction(type))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ButtonUpdate)
