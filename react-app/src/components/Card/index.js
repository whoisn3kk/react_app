import React from 'react';
import styles from './Card.module.scss'

function Card({id, title, price, imageUrl, onFavorite, onPlus, favorited = false}) {
  const [isAdded, setIsAdded] = React.useState(false)
  const [isFavorite, setIsFavorite] = React.useState(favorited)
  
  const onClickPlus = () => {
    onPlus({title, price, imageUrl})
    setIsAdded(!isAdded)
  }

  const onClickFav = () => {
    onFavorite({id, title, price, imageUrl})
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.card + " d-flex align-center flex-column"} >
      <div>
        <div className={styles.favorite} onClick={onClickFav}>
          <img src={isFavorite ? "/img/heart-fill.svg" : "/img/heart-empty.png" } alt="" />
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