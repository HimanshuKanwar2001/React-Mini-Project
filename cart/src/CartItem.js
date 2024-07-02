import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Phone",
      qty: 1,
      img: "",
    };
    // this.increaseQuantity=this.increaseQuantity.bind(this);
  }
  
   increaseQuantity=()=>{

    //setState form 1
    // this.setState({
    //     qty: this.state.qty +1
    // })

    //setState form 2 -if prevState require use this
    this.setState((prevState)=>{
        return{
            qty:prevState.qty+1
        }
    })
    console.log('this.state',this.state);
  }


  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
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
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
              
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
