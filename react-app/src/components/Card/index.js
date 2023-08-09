import React from 'react';
import styles from './Card.module.scss'

console.log(styles)

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false)
  
  const onClickPlus = () => {
    setIsAdded(!isAdded)
  }
  return (
    <div className={styles.card + " d-flex align-center flex-column"} >
      <div>
        <div className={styles.favorite} onClick={props.onFavorite}>
          <img src="/img/heart-empty.svg" alt="" />
        </div>
        <img width={133} height={112} src={props.imageUrl} alt="" />
        <h5 className="pt-15 pb-15">{props.title}</h5>
      </div>
      <div className={styles.card__bottom + " d-flex justify-between align-center"}>
        <div className="d-flex flex-column">
          <p>Цена:</p>
          <b>{props.price} uah.</b>
        </div>
        <img onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg" } alt="" className='cu-p'/>
      </div>
    </div>
  );
}

export default Card;