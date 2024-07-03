import React from "react";

const CartItem = (props) => {
  const { price, title, qty, id,img } = props.product;
  const { product, onIncreaseQty, onDecreaseQty, handleDeleteProduct } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={img} alt="" />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div> 
        <div style={{ color: "#777" }}>Rs {price}</div>
        <div style={{ color: "#777" }}>Qty:{qty}</div>
        <div className="car-item-actions">
          {/* { Button} */}
          <img
            alt="increase"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
            onClick={() => onIncreaseQty(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
            onClick={() => onDecreaseQty(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
            onClick={() => handleDeleteProduct(id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadus: 4,
    background: "#ccc",
  },
};

export default CartItem;
