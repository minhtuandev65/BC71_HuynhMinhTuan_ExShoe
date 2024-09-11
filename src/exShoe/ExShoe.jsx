import React, { Component } from "react";
import { dataShoe } from "./dataShoe";
import ListShoe from "./ListShoe";
import Cart from "./Cart";

export default class ExShoe extends Component {
  state = {
    cart: [],
    listShoe: dataShoe,
  };
  handleAddToCart = (shoe) => {
    let newCart = [...this.state.cart, shoe];
    // newCart.push(shoe);

    this.setState({
      cart: newCart,
    });
  };
  handleDeleteCart = (idShoe) => {
    console.log("🚀 ~ idShoe:", idShoe);
    let { cart } = this.state;
    // xoá item => splice(index,1) / filter
    let newCart = cart.filter((shoe) => shoe.id !== idShoe);
    this.setState({
      cart: newCart,
    });
  };
  render() {
    let { listShoe, cart } = this.state;
    return (
      <div className="row align-items-start">
        <ListShoe shoeArr={listShoe} handleClickAdd={this.handleAddToCart} />
        <Cart dataCart={cart} handleDelete={this.handleDeleteCart} />
      </div>
    );
  }
}
