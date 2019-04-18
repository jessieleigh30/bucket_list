import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Card } from '../styles/AppStyles';

class Dashboard extends React.Component {
  render() {
    return (
      <div style={styles.background}>
      <h1> Bucket List</h1>
      <Grid columns={2} stackable>
        <Grid.Row stretched>
        <Grid.Column>
          <Card style={styles.card}>
            <h1>Logo</h1>
            <h2>User Name</h2>
          </Card>
        </Grid.Column>

        <Grid.Column>
          <Card>
            <h1> Total challenges completed</h1>
          </Card>
          <Card>
            Hello
          </Card>
        </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
  }
}

const styles = {
  background: {
    backgroundColor: "#1d1d1d",
    height: "100vh",
  },
  card: {
    backgroundColor:"#55c0dd"
  }
}



export default Dashboard;
