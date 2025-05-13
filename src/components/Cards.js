import Card from 'components/Card';
import style from 'styles/Cards.module.css';
// import style from '../card/Card.module.css';

const Cards = () => {
  return (
    <div className={style.cards_field}>
      <div className={style.cards_grid}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {/* <button>pagination btn</button> */}
    </div>
  );
};

export default Cards;
