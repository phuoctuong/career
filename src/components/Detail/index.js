import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import updateUserAction from 'actions/updateUserAction';
import usersApi from 'apis/users';
import { bindActionCreators } from 'redux';
import './styles.scss';

class Detail extends React.Component {
  async componentDidMount() {
    const {
      match: { params = '' }
    } = this.props;
    const rs = await usersApi.getUsers(params.username);
    this.props.getUsersSuccess(rs);
  }

  render() {
    const {
      user = {
        avatar_url: '',
        name: '',
        location: ''
      }
    } = this.props;
    return (
      <div>
        <h1>Person</h1>
        <div styleName="back-button"><Link to={'/'}>Back To Home</Link></div>
        <div styleName="wrapper-user">
          <img styleName="avatar" src={user.avatar_url} width={80} height={80} />
          <br />
          <span styleName="name">{user.name}</span>
          <br />
          <span styleName="location">{user.location}</span>
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.updateReducer.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUsersSuccess: updateUserAction.getUsersSuccess
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
