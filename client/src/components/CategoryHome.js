import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';

import shuffle from './shuffle.js'

// import axios from 'axios';

const ItemList = ({ categories }) => (
  <ul>
    <PoseGroup>
      {categories.map(category => <StyledItem key={category.id}>{category.text}</StyledItem>)}
    </PoseGroup>
  </ul>
);



class CategoryHome extends React.Component {
  state = {
    categories: [
      { id: 1, text: "Hike Bridal Veil Falls" },
      { id: 2, text: "Visit Arches National Park" },
      { id: 3, text: "Swim in Bear Lake" },
      { id: 4, text: "Float in the Great Salt Lake" }
    ],
  }

  //maybe set up shuffle with a button? comment out if annoying
  // _shuffle = () => {
  //   this.setState({ categories: shuffle(this.state.categories) });
  // };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.interval = setInterval(this._shuffle, 2000);

    //new category can fade in from the bottom
    setTimeout(() => {
      this.setState({
        categories: this.state.categories.concat([{ id: 5, text: "See how I fade in?" }])
      });
    }, 3000);

    //new category can fade in from the top
    setTimeout(() => {
      this.setState({
        categories: [{ id: 6, text: "Can also fade in on top" }].concat(
          this.state.categories
        )
      });
    }, 6000);
  }

  renderCategories = () => {
    // axios.get("")
  }




  render() {
    return (
      <div>
        Different Categories
        {/* {this.renderCategories()} */}
        <Container>
          <ItemList categories={this.state.categories} />
        </Container>

      </div>

    )
  }
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Item = posed.li({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const StyledItem = styled(Item)`
  padding: 15px;
  list-style-type: none;
  margin: 5px 0px 5px 0px;
  border: 1px solid #e3e3e3;
  background: #55c0dd;
`;




export default CategoryHome;