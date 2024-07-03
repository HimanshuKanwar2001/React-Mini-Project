import React from "react";
import './App.css';

import Cart from "./Cart";
import Navbar from './Navbar';

class  App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 1,
          img: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGNofGVufDB8fDB8fHww",
          id: 1,
        },
        {
          price: 500,
          title: "Phone",
          qty: 10,
          img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          id: 2,
        },
        {
          price: 999,
          title: "Laptop",
          qty: 4,
          img: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          id: 3,
        },
      ],
    };
    // this.increaseQuantity=this.increaseQuantity.bind(this);
  }

handleIncreaseQuantity=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;
    this.setState({
        products
    })
}

handleDecreaseQunatity=(product)=>{
    const{products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0){
        return
    }
    products[index].qty-=1;
    this.setState({
        products
    })

}
handleDeleteProduct=(id)=>{
    const {products}=this.state;
    const items=products.filter((item)=>item.id !== id);
    this.setState({
        products:items
    })

}
getCartCount=()=>{
  const {products}=this.state;
  let count=0;

  products.forEach((product)=>{
    count+=product.qty;
  })
  return count;
}
getCartTotal=()=>{
  const {products}=this.state;
  let cartTotal=0;
  products.map((product)=>{
    cartTotal=cartTotal+(product.qty*product.price);

  })
  return cartTotal;

}
 
  render(){
    const {products}=this.state
    return (
      <div className="App">
        <Navbar count ={this.getCartCount()}/>
       <Cart 
       products={products}
       onIncreaseQty={this.handleIncreaseQuantity}
       onDecreaseQty={this.handleDecreaseQunatity}
       handleDeleteProduct={this.handleDeleteProduct}
       />
       <div style={{fontSize:20, padding:10}}>TOTAL:{this.getCartTotal()}</div>
      </div>
    );



 }
 
}

export default App;
