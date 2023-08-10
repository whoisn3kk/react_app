function Drawer({onClose, items = []}) {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="mb-40 d-flex justify-between">
          Корзина
          <img className="cu-p" onClick={onClose} src="/img/btn-remove.svg" alt="remove" />
        </h2>

        <div className="items flex">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} uah.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 uah.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 uah.</b>
            </li>
          </ul>
          <button className="greenBtn">
            Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
