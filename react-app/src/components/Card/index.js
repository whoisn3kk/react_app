import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";

function Card({
  id,
  title,
  price,
  imageUrl,
  onFavorite,
  onPlus,
  favorited = false,
  added = false,
}) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  const onClickFav = () => {
    onFavorite({ id, title, price, imageUrl });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card + " d-flex align-center flex-column"}>
      <ContentLoader
        speed={2}
        width={210}
        height={254}
        viewBox="0 0 210 254"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="30" y="10" rx="10" ry="10" width="150" height="90" />
        <rect x="30" y="114" rx="5" ry="5" width="150" height="15" />
        <rect x="30" y="144" rx="5" ry="5" width="100" height="15" />
        <rect x="30" y="181" rx="8" ry="8" width="100" height="24" />
        <rect x="148" y="173" rx="8" ry="8" width="32" height="32" />
      </ContentLoader>

      {/* <div>
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
      </div> */}
    </div>
  );
}

export default Card;
