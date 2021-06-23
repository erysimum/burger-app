import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  cheese: 1.0,
  bacon: 2.0,
  meat: 3.0,
  salad: 4.0
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      bacon: 0,
      meat: 0,
      salad: 0
    },
    totalPrice: 5,
    purchasable: false,
    modalDisplay: false //dont show a modal of order summary
  };
  updatePurchaseState = (updatedIngredients) => {
    const sum = Object.keys(updatedIngredients)
      .map((igKey) => {
        return updatedIngredients[igKey];
      })
      .reduce((accumulator, curVal) => {
        return accumulator + curVal;
      }, 0);
    this.setState({
      purchasable: sum > 0
    });
  };

  //Added INgredient Handler
  addIngredientHandler = (type) => {
    const previousNumberOfSpecificType = this.state.ingredients[type];
    const currentNumberOfSpecificType = previousNumberOfSpecificType + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = currentNumberOfSpecificType;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const previousNumberOfSpecificType = this.state.ingredients[type];
    if (previousNumberOfSpecificType <= 0) {
      return;
    }
    const currentNumberOfSpecificType = previousNumberOfSpecificType - 1;
    /*  if (currentNumberOfSpecificType < 0) {
      return null;
    } */
    const updatedIngredients = {
      ...this.state.ingredients
    };
    const priceDeduction = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice - priceDeduction;
    updatedIngredients[type] = currentNumberOfSpecificType;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  };

  modalDisplayHandler = () => {
    this.setState({
      modalDisplay: true
    });
  };

  modalClose = () => {
    this.setState({
      modalDisplay: false
    });
  };
  purchaseContinue = () => {
    // alert("wanna continue?");
    // const orderObj = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Amit Shahi",
    //     address: {
    //       street: "Clarendon Street",
    //       postcode: "3876",
    //       country: "Australia",
    //     },
    //     email: "zmt@worldmarketing.com",
    //   },
    //   deliverymethod: "fastest",
    // };
    // axios
    //   .post("/orders/json", orderObj)
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));

    // this.props.history.push("/checkout");

    //how you make your query?
    //it would be sth like this
    ///checkout/?search?salad=1&meat=2&ham=3&cheese=4

    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          '=' +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryParams.push('price=' + this.state.totalPrice);

    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  };

  render() {
    // console.log(this.props); // we can get history obj here coz it is part of Route
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
      //   console.log("val " + disabledInfo[key]);
    }
    //{cheese:true, meat:true}

    return (
      <Aux>
        <Modal show={this.state.modalDisplay} modalClose={this.modalClose}>
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancel={this.modalClose}
            purchaseContinue={this.purchaseContinue}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          added={this.addIngredientHandler}
          removed={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={!this.state.purchasable}
          price={this.state.totalPrice}
          ordered={this.modalDisplayHandler}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
