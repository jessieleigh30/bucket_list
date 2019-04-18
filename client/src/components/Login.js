import React from 'react';
import { AuthConsumer } from '../providers/AuthProvider';
import { Form, Button} from 'semantic-ui-react';



class Login extends React.Component {
  state = { email:'', password: ''}

  render(){
    const { email, password} = this.state;
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label= "Email"
          autofocus
          required
          name='email'
          value={email}
          placeholder="Email"
          onChange={this.handleChange}
        />
        <Form.Input
          label= "Password"
          required
          name='password'
          value={password}
          placeholder="Password"
          onChange={this.handleChange}
        />
        <Button>Submit</Button>
      </Form>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render(){
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}