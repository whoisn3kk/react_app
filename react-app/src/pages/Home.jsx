import Card from "../components/Card";

function Home({ items, cartItems, searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onAddToFavorite }) {
    
    return (
        <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск: "${searchValue}"` : "Все кроссовки"}</h1>
          <div className="search-block d-flex">
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear cu-p"
                src="/img/btn-remove.svg"
                alt="clear"
              />
            )}
            <img src="/img/search.svg" alt="Search" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              type="text"
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
                {...item}
              />
            ))}
        </div>
      </div>
    )
}

export default Home;