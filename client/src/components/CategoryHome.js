import React from 'react';
import ChallengeSquare from './Square';
// import axios from 'axios';

class CategoryHome extends React.Component {
  state = { categories: [], }

  renderCategories = () => {
    // axios.get("")
  }




  render() {
    return (
      <div>
        Different Categories
        {this.renderCategories()}
        <div>
          <ChallengeSquare  />
        </div>
      </div>

    )
  }
}

export default CategoryHome;