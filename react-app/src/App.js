import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://64d3c3be67b2662bf3dcb1d2.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, [])

  return (
    <div className="wrapper">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <Card
              key={obj.id}
              title={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavorite={() => console.log("add to Fav")}
              onPlus={() => console.log("Pressed Plus")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
