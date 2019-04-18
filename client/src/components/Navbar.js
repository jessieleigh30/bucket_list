import React from 'react';
import { Menu } from 'semantic-ui-react';
import { AuthConsumer } from '../providers/AuthProvider';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout}, location} = this.props;

    if (user) {
      return (
        <Menu.Menu position="right">
          <Menu.Item
            name='logout'
            onclick={ () => handleLogout(this.props.history)}
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
            id= 'login'
            name='login'
            active={location.pathname==='/login'}
            style={styles.font}
            />
          </Link>
          <Link to='register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname ==='/register'}
              style={styles.font}
              />
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <Menu stackable style={styles.background}>
        <Link to="/">
          <Menu.Item style={styles.font}>
            Home
        </Menu.Item>
        </Link>
        <Link to="/categories">
          <Menu.Item style={styles.font}>
            Challenges
        </Menu.Item>
        </Link>
        <Menu.Item style={styles.font}>
          Bucket
        </Menu.Item>
          {this.rightNavItems()}
      </Menu>
    )
  }
}

const styles = {
  background: {
    backgroundColor: "#1d1d1d",

  },
  font: {
    color: "white",
    fontFamily: "'Work Sans', sans-serif",

  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);