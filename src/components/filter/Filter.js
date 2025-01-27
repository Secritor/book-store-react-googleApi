import React, {Component} from 'react';
import '../filter/Filter.css';

const Filter = (props) => {
  const filterItems = [
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
  ];

  const renderFilterItems = filterItems.map((category, index) => (
    <li key={index} className={category}>
      {category}
    </li>
  ));
  return (
    <div className="filter">
      <ul className="filter-items">{renderFilterItems}</ul>
    </div>
  );
};

export default Filter;
