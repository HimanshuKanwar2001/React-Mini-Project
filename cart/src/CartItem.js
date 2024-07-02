import React from "react";

class CartItem extends React.Component {
  increaseQuantity = () => {
    //setState form 1
    // this.setState({
    //     qty: this.state.qty +1
    // })

    //setState form 2 -if prevState require use this
    this.setState(
      (prevState) => {
        return {
          qty: prevState.qty + 1,
        };
      },
      () => {
        console.log("this.state", this.state);
      }
    );
    // console.log('this.state',this.state);
  };

  decreaseQuantity = () => {
    if (this.state.qty <= 0) {
      return;
    }
    //form 1
    // this.setState({
    // qty:this.state.qty-1
    // })

    // form 2
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };

  render() {
    console.log("this.props", this.props);
    console.log("render");
    const { price, title, qty } = this.props.product;
    return (
      <div className="cart-item">
        {this.props.jsx}
        <div className="left-block">
          <img style={styles.image} alt="" />
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
              onClick={()=>this.props.onIncreaseQty(this.props.product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
              onClick={()=>this.props.onDecreaseQty(this.props.product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadus: 4,
    background: "#ccc",
  },
};

export default CartItem;
