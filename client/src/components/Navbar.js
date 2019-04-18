import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  render() {
   return (
      <Menu stackable style={styles.background}>
        <Link to="/">
          <Menu.Item style={styles.font}>
            Home
        </Menu.Item>
        </Link>
        <Menu.Item style={styles.font}>
          Challenges
        </Menu.Item>
        <Menu.Item style={styles.font}>
          Bucket
        </Menu.Item>
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
    fontFamily:"'Work Sans', sans-serif",

  }
}

export default Navbar;