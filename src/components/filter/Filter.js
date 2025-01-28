import React, {useState} from 'react';
import style from './Filter.module.css';

const Filter = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    <li key={index} className={style.filter_item}>
      {category}
    </li>
  ));
  return (
    <>
      <div className={style.burger_menu_container}>
        <button className={style.burger_menu} onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className={style.overlay_menu}>
          <ul className={style.filter_items}>{renderFilterItems}</ul>
        </div>
      )}
      <div className={style.filter}>
        <ul className={style.filter_items}>{renderFilterItems}</ul>
      </div>
    </>
  );
};

export default Filter;
