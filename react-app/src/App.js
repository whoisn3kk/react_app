function App() {
  return (
    <div className="wrapper">
      <div style={{display: 'none'}} className="overlay">
        <div className="drawer d-flex flex-column">
          <h2 className="mb-40 d-flex justify-between">Корзина <img className="cu-p" src="/img/btn-remove.svg" alt="remove" /></h2>

          <div className="items flex">
            <div className="cartItem d-flex align-center mb-20">
              <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>6 999 uah.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>6 999 uah.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
            </div>
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
            <button className="greenBtn">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
          </div>
        </div>
      </div>


      <header className="d-flex justify-between align-center p-40">
        <div className="header-left d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" className="mr-15"/>
          <div>
            <h3 className="text-uppercase"> React Sneakers</h3>
            <p className="opacity-5"> Магазин лучших кроссовок</p>
          </div>
        </div>

        <div className="d-flex">
          <div className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="cart" className="mr-15"/>
            <span>1205 uah.</span>
          </div>
          <div>
            <img width={18} height={18} src="/img/user.svg" alt="user"/>
          </div>
        </div>
      </header>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          <div className="card d-flex align-center flex-column">
            <div className="card__top">
              <div className="favorite">
                <img src="/img/heart-empty.svg" alt="" />
              </div>
              <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
              <h5 className="pt-15 pb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            </div>
            <div className="card__bottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>6 999 uah.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card d-flex align-center flex-column">
            <div className="card__top">
              <img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
              <h5 className="pt-15 pb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            </div>
            <div className="card__bottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>6 999 uah.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card d-flex align-center flex-column">
            <div className="card__top">
              <img width={133} height={112} src="/img/sneakers/3.jpg" alt="" />
              <h5 className="pt-15 pb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            </div>
            <div className="card__bottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>6 999 uah.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card d-flex align-center flex-column">
            <div className="card__top">
              <img width={133} height={112} src="/img/sneakers/4.jpg" alt="" />
              <h5 className="pt-15 pb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            </div>
            <div className="card__bottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <p>Цена:</p>
                <b>6 999 uah.</b>
              </div>
              <button>
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
