import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import updateUserAction from 'actions/updateUserAction';

class ButtonUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      test: 0
    };
  }

  handleClick(type) {
    this.props.updateUser(type);
  }

  render() {
    return (
      <div>
        <h5>
          {this.props.title}: {this.state.count}
        </h5>
        <button onClick={() => this.handleClick(1)}>Click here to update User 1</button>
        <button onClick={() => this.handleClick(2)}>Click here to update User 2</button>
        <button onClick={() => this.handleClick(3)}>Click here to update User 3</button>
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    updateReducer: state.updateReducer
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateUser: updateUserAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonUpdate);
