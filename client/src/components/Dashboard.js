import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Card, Header1, Header2, Header3 } from '../styles/AppStyles';
import ChallengeSquare from './Square';


class Dashboard extends React.Component {
  render() {
    return (
      <div style={styles.background}>
        <Grid columns={2} stackable>
          <Grid.Row stretched>
            <Grid.Column>
              <Card style={styles.card}>
                <Header1 style={{ marginTop: "50px" }}>User Name</Header1>
                <Header2>Utah's Ultimate Bucket List</Header2>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card style={styles.card2}>
                <Header2 style={{ marginTop: "25px" }}> Total challenges completed</Header2>
                <ChallengeSquare />


              </Card>
              <Card>
                <Header3 style={{ marginTop: "25px" }}>More Stuff</Header3>
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
    backgroundColor: "#55c0dd",
    marginTop: "5%"
  },
  card2: {
    backgroundColor: "#e8e9eb",
    marginTop: "5%"
  }
}



export default Dashboard;
