import React from 'react';
import { Grid } from 'semantic-ui-react';
 
class Dashboard extends React.Component {
  render() {
    return (
      <Grid columns={2} stackable>
        <Grid.Column>
          <h1>Where the User info will go</h1>
        </Grid.Column>
      </Grid>
     
    )
  }
}

export default Dashboard;