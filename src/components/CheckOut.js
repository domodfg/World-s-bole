import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar.js";
import CustomInput from "./input";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, setShopContent } from "../utils/shopSlicer";
import PaymentForm from "./PaymentForm";
import "../styles/checkOut.css";

const CheckOut = () => {
  const [total, setTotal] = useState(0);
  const [editable, setEditable] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const cartItems = useSelector(selectCount);
  const dispatch = useDispatch();

  //testEmail : 1A2b3c4d5@example.com
  //password: 1A2b3c4d5@

  const add = (accumulator, { quantity, price }) => {
    return accumulator + quantity * price;
  };

  useEffect(() => {
    setTotal(cartItems.reduce(add, 0));
    if (cartItems.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [cartItems]);

  let navigate = useNavigate();
  const changeRoute = () => {
    let path = `/shop`;
    navigate(path);
  };

  const removeClick = (e) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== e.target.id
    );
    dispatch(setShopContent(newCartItems));
  };

  const editClick = () => {
    setEditable(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditable(false);
    }
  };

  const handleBlur = () => {
    setEditable(false);
  };

  const handleChange = (e) => {
    const newQuantity = parseInt(e.target.value);

    const newCartItems = cartItems.map((item) => {
      if (item.id === e.target.id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    dispatch(setShopContent(newCartItems));
  };

  const decreaseClick = (e) => {
    let newCartItems = {};
    let newQuantity = 0;
    let foundIndex = cartItems.findIndex((item) => item.id === e.target.id);

    if (cartItems[foundIndex].quantity <= 1) {
      newCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== e.target.id
      );
    } else {
      newCartItems = cartItems.map((item) => {
        if (item.id === e.target.id) {
          newQuantity = item.quantity - 1;
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    }

    dispatch(setShopContent(newCartItems));
  };

  const increaseClick = (e) => {
    let newQuantity = 0;

    const newCartItems = cartItems.map((item) => {
      if (item.id === e.target.id) {
        newQuantity = item.quantity + 1;
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    dispatch(setShopContent(newCartItems));
  };

  if (isEmpty) {
    return (
      <div className="checkOutPage">
        <div className="navContainer">
          <Navbar />
        </div>
        <div className="empty-shopping-cart">
          <div className="empty-shopping-cart-desc">購物車沒有貨品</div>
          <div>
            <button onClick={changeRoute} className="shop-now-btn">
              立即購物
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="checkOutPage">
        <div className="navContainer">
          <Navbar />
        </div>

        <div className="checkout-container">
          <div className="left-container">
            {cartItems.map((cartItem) => {
              const { id, img, name, price, quantity } = cartItem;
              return (
                <div key={id} className="list-item">
                  <div className="product-container">
                    <div className="img-container">
                      {<img className="img-details" src={img} alt="product" />}
                    </div>
                    <div className="details-container">
                      <div className="name-details">{name}</div>
                      <div className="button-container">
                        <button
                          id={id}
                          onClick={decreaseClick}
                          className="increase-btn"
                        >
                          &#8595;
                        </button>

                        <div onClick={editClick} onKeyDown={handleKeyDown}>
                          {quantity}
                        </div>

                        <button
                          id={id}
                          onClick={increaseClick}
                          className="decrease-btn"
                        >
                          &#8593;
                        </button>
                      </div>
                      <div className="price-details">HKD ${price}</div>
                      <div className="remove-details">
                        <button
                          id={id}
                          onClick={removeClick}
                          className="remove-btn"
                        >
                          移除
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {
            <div className="right-container">
              <div>
                <div className="space-between-container">
                  <div>小計:</div>
                  <div>${total}</div>
                </div>
                <div className="space-between-container">
                  <div>運費:</div>
                  <div>$0</div>
                </div>
              </div>
              <div className="space-between-container">
                <div>總額:</div>
                <div>${total}</div>
              </div>
              <div>
                <PaymentForm total={total} shippingCost={0} />
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
};

export default CheckOut;
