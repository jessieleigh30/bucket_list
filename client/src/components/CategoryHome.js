import React from 'react';
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
        { this.renderCategories() }
      </div>
    )
  }
} 

export default CategoryHome;