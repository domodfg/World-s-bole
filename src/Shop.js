import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import close from "./images/gameinfo/close.png";
import Footer from "./components/footer.js";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, setShopContent } from "./utils/shopSlicer";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles/shop.css";
import ShopNav from "./components/Shop/ShopNav.js";
import ShopWeapon from "./components/Shop/ShopWeapon.js";
import ShopGame from "./components/Shop/ShopGame.js";
import ShopMerch from "./components/Shop/ShopMerch.js";
import shopBanner from "./images/shop/shopbanner.png";
import ShopGacha from "./components/Shop/ShopGacha.js";
import drawMachine from "./images/shop/gachaMachine.png";
import upArrow from "./images/shop/upArrow.png";

const Shop = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const cartItems = useSelector(selectCount);
  const dispatch = useDispatch();
  const { category } = useParams();
  const navigate = useNavigate();

  const addToCart = (product) => {
    let cartItemCopy = [...cartItems];
    let foundIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === product.id
    );

    if (foundIndex !== -1) {
      cartItemCopy = cartItems.map((cartItem) => {
        if (cartItem.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
    } else {
      let productClone = { ...product };
      productClone.quantity = 1;
      cartItemCopy.push(productClone);
    }
    dispatch(setShopContent(cartItemCopy));
    setDisplayAlert(true);
    setTimeout(() => {
      setDisplayAlert(false);
    }, 3000);
  };

  useEffect(()=>{
    var BG1 = new Image();
    BG1.src = "../../images/shop/anime-forest-scenery.jpg";
    var BG2 = new Image();
    BG2.src = "../images/shop/gacha2-5BG.jpg";
    var BG3 = new Image();
    BG3.src = "../images/shop/gacha4BG.jpg";
    var BG4 = new Image();
    BG4.src = "../images/shop/gachashopBG4.jpg";
    var BG5 = new Image();
    BG5.src = "../images/shop/gacha4BG_2.jpg";
    var BG6 = new Image();
    BG6.src = "../images/shop/gacha6BG.jpeg";
    var BG7 = new Image();
    BG7.src = "url(../images/shop/gacha7BG.jpg)";
  },[])

  return (
    <div className="App">
      <Navbar />
      <div className="shop">
        <div className="shopwrapper  container-lg">
          <ShopNav />
          <div className="shopHome">
            {!category && (
              <div>
                <h2 className="shopDivider shopFirstDivider">購買遊戲</h2>
                <ShopGame handleCart={addToCart} />
                <ShopMerch handleCart={addToCart} />
                <img className="merchPromo" src={shopBanner} alt="banner" />
                <ShopWeapon
                  handleCart={addToCart}
                  showPage={false}
                  itemsPerPage={12}
                />
                <div className="text-center">
                  <button
                    className="btn-secondary btn moreWeapon"
                    onClick={() => navigate("/shop/weapon")}
                  >
                    查看更多
                  </button>
                </div>
                <div
                  className="shopPromotion"
                  onClick={() => navigate("/shop/gacha")}
                >
                  <h2>角色抽卡</h2>
                  <h2>
                    機率乘3
                    <img className="upArrow" src={upArrow} alt="increase" />
                  </h2>
                  <img src={drawMachine} alt="gacha promotion" />
                </div>
              </div>
            )}
            {category === "weapon" && (
              <ShopWeapon
                handleCart={addToCart}
                class="shopMargin"
                showPage={true}
                itemsPerPage={12}
              />
            )}
            {category === "merch" && (
              <ShopMerch handleCart={addToCart} class="shopMargin" />
            )}
            {category === "gacha" && (
              <div>
                <ShopGacha />
              </div>
            )}
          </div>
        </div>
        {displayAlert && (
          <div className="buyingpopup">
            <p>成功添加至購物車</p>
            <img
              src={close}
              alt="close"
              onClick={() => setDisplayAlert(false)}
            />
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Shop;
