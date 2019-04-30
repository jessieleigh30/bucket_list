import React from 'react';
import posed from 'react-pose';
import styled from 'styled-components';




class ChallengeSquare extends React.Component {
  state = { hovering: false }


  render() {
    return (
      <Container>
        <StyledSquare
          pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
        />
      </Container>
    )
  }
};

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.5 }
});

const StyledSquare = styled(Square)`
  width: 100px;
  height: 50px;
  background: #ea463e;
  position: absolute;
  // mess wiht position absolute to move to top
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default ChallengeSquare;
