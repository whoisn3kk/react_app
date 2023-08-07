function App() {
  return (
    <div className="wrapper">
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
        <h1 className="mb-40">Все кроссовки</h1>
        <div className="d-flex">
          <div className="card d-flex align-center flex-column">
            <div className="card__top">
              {/* <button>
                <img src="/img/heart.svg" alt="" />
              </button> */}
              <img width={133} height={112} src="/img/image 5.jpg" alt="" />
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
              {/* <button>
                <img src="/img/heart.svg" alt="" />
              </button> */}
              <img width={133} height={112} src="/img/image 5.jpg" alt="" />
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
              {/* <button>
                <img src="/img/heart.svg" alt="" />
              </button> */}
              <img width={133} height={112} src="/img/image 5.jpg" alt="" />
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
              {/* <button>
                <img src="/img/heart.svg" alt="" />
              </button> */}
              <img width={133} height={112} src="/img/image 5.jpg" alt="" />
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
