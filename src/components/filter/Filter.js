import React, { Component } from "react"
import '../filter/Filter.css';





class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterItems: [
        'Architecture',
        'Art & Fashion',
        'Biography',
        'Business',
        'Crafts & Hobbies',
        'Drama',
        'Fiction',
        'Food & Drink',
        'Health & Wellbeing',
        'History & Politics',
        'Humor',
        'Poetry',
        'Psychology',
        'Science',
        'Technology',
        'Travel & Maps',
        ],
    };
  }


  
  handleClick = (category) => {
    this.props.onCategoryClick(category);
  }

  render () {
    const { activeCategory } = this.props
    const renderFilterItems = this.state.filterItems.map((category, index) =>
      <li key={index} className={activeCategory === category ? "filtet-item-active" : "filter-item"} onClick={() => this.handleClick(category)}>{category}</li>
    )
      return (
        <div className="filter">
        <ul className="filter-items">
          {renderFilterItems}
        </ul>
    </div>
      )
  }

  
};

export default Filter;
