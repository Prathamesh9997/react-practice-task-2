import "./App.css";
import Topbar from "./Topbar";
import Products from "./products";
import Product from "./Product";
import ListItems from "./ListItems";
import { useState } from "react";

function App() {
  const [cartList, setcartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClick = (newData) => {
    newData.isDisabled = true;
    setcartList([...cartList, newData]);
    setTotalPrice(totalPrice + newData.price);
  };

  const handleRemove = (id) => {
    const newCartList = cartList.filter((item) => {
      return item.id !== id;
    });
    const listItem = cartList.filter((item) => {
      return item.id === id;
    });
    const updatedTotalPrice = listItem[0].price;
    listItem[0].isDisabled = false;
    setcartList(newCartList);
    setTotalPrice(totalPrice - updatedTotalPrice);
  };
  return (
    <div>
      <Topbar></Topbar>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="my-4">Cart</h1>
            <ul className="list-group">
              {cartList.map((item) => {
                return (
                  <ListItems
                    key={item.id}
                    item={item}
                    handleRemove={handleRemove}
                  />
                );
              })}
            </ul>
            <h1>{`Total: ${totalPrice}`}</h1>
          </div>
          <div className="col-lg-9">
            <div className="row">
              {Products.map((product) => {
                return (
                  <Product
                    key={product.id}
                    product={product}
                    handleAddCart={handleClick}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
