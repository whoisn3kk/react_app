import React from "react";
import { Routes, Route } from "react-router-dom";

import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(
        "http://127.0.0.1:8000/api/?uuid=2f6f1aa8-7d4b-4e02-9228-df53f16b42cf"
      )
      .then((res) => {
        setItems(res.data);
        console.log(res.data);
      });

    axios
      .get("https://64d3c3be67b2662bf3dcb1d2.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("https://64d3c3be67b2662bf3dcb1d2.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = async (obj) => {
    const { data } = await axios.post("https://64d3c3be67b2662bf3dcb1d2.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, data]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://64d3c3be67b2662bf3dcb1d2.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://64d3c3be67b2662bf3dcb1d2.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post("https://64d3c3be67b2662bf3dcb1d2.mockapi.io/favorites", obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в закладки")
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
      <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
            />
          }
        />

        <Route path="/favorites" element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />} />
        
      </Routes>
    </div>
  );
}

export default App;
