import React from 'react';
import styles from './Card.module.scss'

console.log(styles)

function Card({title, price, imageUrl, onFavorite, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false)
  
  const onClickPlus = () => {
    onPlus({title, price, imageUrl})
    setIsAdded(!isAdded)
  }
  return (
    <div className={styles.card + " d-flex align-center flex-column"} >
      <div>
        <div className={styles.favorite} onClick={onFavorite}>
          <img src="/img/heart-empty.svg" alt="" />
        </div>
        <img width={133} height={112} src={imageUrl} alt="" />
        <h5 className="pt-15 pb-15">{title}</h5>
      </div>
      <div className={styles.card__bottom + " d-flex justify-between align-center"}>
        <div className="d-flex flex-column">
          <p>Цена:</p>
          <b>{price} uah.</b>
        </div>
        <img onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg" } alt="" className='cu-p'/>
      </div>
    </div>
  );
}

export default Card;