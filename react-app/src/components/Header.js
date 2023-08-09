function Header(props) {
  console.log(props)
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="header-left d-flex align-center">
        <img
          width={40}
          height={40}
          src="/img/logo.png"
          alt="logo"
          className="mr-15"
        />
        <div>
          <h3 className="text-uppercase"> React Sneakers</h3>
          <p className="opacity-5"> Магазин лучших кроссовок</p>
        </div>
      </div>

      <div className="d-flex">
        <div className="mr-30 cu-p" onClick={props.onClickCart}>
          <img
            width={18}
            height={18}
            src="/img/cart.svg"
            alt="cart"
            className="mr-15"
          />
          <span>1205 uah.</span>
        </div>
        <div>
          <img width={18} height={18} src="/img/user.svg" alt="user" />
        </div>
      </div>
    </header>
  );
}

export default Header;
