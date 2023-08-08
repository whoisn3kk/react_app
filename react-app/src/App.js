import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/CartDrawer";

const arr = [
  {
    id: 0,
    name: "Мужские Кроссовки Nike Blazer Mid Green",
    price: 6999,
    imgUrl: "/img/sneakers/1.jpg",
  },
  {
    id: 1,
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 7690,
    imgUrl: "/img/sneakers/2.jpg",
  },
  {
    id: 2,
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 3490,
    imgUrl: "/img/sneakers/3.jpg",
  },
  {
    id: 3,
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: 4490,
    imgUrl: "/img/sneakers/4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card key={obj.id} title={obj.name} price={obj.price} imgUrl={obj.imgUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
