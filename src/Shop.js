import Navbar from "./components/Navbar.js";
import pc from "./images/pcgamecase.jpg";
import ps5 from "./images/ps5-game-case.jpg";
import React, { useState } from "react";
import CheckOut from "./components/checkOut"

const ProductFactory = (title, price, quantity) => {
  return { title, price, quantity };
};

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [openStatus, setOpenStatus] = useState({shop: true, shoppingCart: false});

  const store = () => {
    localStorage.setItem("projectStorage", JSON.stringify(cartItems));
  };

  console.log(cartItems);

  const shopClick = () => {
    setOpenStatus({shop: true, shoppingCart: false})
  }

  const shoppingCartClick = () => {
    setOpenStatus({shop: false, shoppingCart: true})
  }

  const addToCart = (e) => {
    let cartItemCopy = [...cartItems];
    let item = JSON.parse(e.target.name);
    cartItemCopy.push(item);
    store()
    setCartItems(cartItemCopy);
  };

  const removeClick = (e) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== e.target.id
    );

    setCartItems(newCartItems);
  };

  const decreaseClick = (e) => {
    let newCartItems = {};

    let foundIndex = cartItems.findIndex((item) => item.id === e.target.id);

    if (cartItems[foundIndex].quantity === 1) {
      newCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== e.target.id
      );
    } else {
      newCartItems = cartItems.map((item) => {
        if (item.id === e.target.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    }
    setCartItems(newCartItems);
  };

  const increaseClick = (e) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === e.target.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
      }
      return item;
    });

    setCartItems(newCartItems);
  };

  const pcCopy = ProductFactory("PC edition", 399, 1);
  const ps5Copy = ProductFactory("PS5 edition", 429, 1);

  if(openStatus.shop) {
    return (
      <div className="shop">
        <div className="main">
          <Navbar shop={shopClick} shoppingCart={shoppingCartClick}/>
        </div>
        { openStatus.shop &&
          <div className="gamecopy">
          <div>
            <img src={pc} alt="pc game case" />
            <button name={JSON.stringify(pcCopy)} onClick={addToCart}>
              加入購物車
            </button>
          </div>
          <div>
            <img src={ps5} alt="ps5 game case" />
            <button name={JSON.stringify(ps5Copy)} onClick={addToCart}>
              加入購物車
            </button>
          </div>
        </div>
        }
      </div>
    )
  }else{
    return (
      <div>
        <div className="main">
          <Navbar />
        </div>  

        <CheckOut somedata={"succeed"} cartItems={cartItems} removeClick={removeClick} decreaseClick={decreaseClick} increaseClick={increaseClick}/>
      </div>
        
    )
  }
};

export default Shop;
