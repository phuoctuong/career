import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const topUsers = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh'];

class Home extends React.Component {
  render() {
    return (
      <div styleName="wrapper">
        <h1>Home</h1>
        <div>
          <h2>Top 5 GitHub Users</h2>
          <span>Tap the username to see more information</span>
          <div styleName="group-user">
            {topUsers.map(userName => (
              <div key={userName} styleName="wrapper-item">
                <Link to={`/users/${userName}`} styleName="item">
                  {userName}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
