import styles from './Card.module.scss'

console.log(styles)

function Card(props) {
    const onClickPlus = () => {
        alert(props.title)
    }

  return (
    <div className={styles.card + " d-flex align-center flex-column"} >
      <div>
        <div className={styles.favorite}>
          <img src="/img/heart-empty.svg" alt="" />
        </div>
        <img width={133} height={112} src={props.imgUrl} alt="" />
        <h5 className="pt-15 pb-15">{props.title}</h5>
      </div>
      <div className={styles.card__bottom + " d-flex justify-between align-center"}>
        <div className="d-flex flex-column">
          <p>Цена:</p>
          <b>{props.price} uah.</b>
        </div>
        <button onClick={() => onClickPlus()}>
          <img width={11} height={11} src="/img/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;