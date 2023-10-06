import React from "react"
import '../filter/Filter.css';




const Filter = (props) => {
  return (
    <div className="filter">
        <ul className="filter-items">
          <li className="filter-item filtet-item-active">
            Architecture
          </li>
          <li className="filter-item">
            Art & Fashion
          </li>
          <li className="filter-item">
            Biography
          </li>
          <li className="filter-item">
            Business
          </li>
          <li className="filter-item">
            Crafts & Hobbies
          </li>
          <li className="filter-item">
            Drama
          </li>
          <li className="filter-item">
            Fiction
          </li>
          <li className="filter-item">
            Food & Drink
          </li>
          <li className="filter-item">
            Health & Wellbeing
          </li>
          <li className="filter-item">
            History & Politics
          </li>
          <li className="filter-item">
            Humor
          </li>
          <li className="filter-item">
            Poetry
          </li>
          <li className="filter-item">
            Psychology
          </li>
          <li className="filter-item">
            Science
          </li>
          <li className="filter-item">
            Technology
          </li>
          <li className="filter-item">
            Travel & Maps
          </li>
        </ul>
    </div>
  )
};

export default Filter;
