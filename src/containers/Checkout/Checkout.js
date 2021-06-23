import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactDetail from '../Checkout/ContactDetail/ContactDetail';

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredientObj = [];
    let price = 0;

    for (let para of query.entries()) {
      if (para[0] === 'price') {
        price = para[1];
      } else {
        ingredientObj[para[0]] = +para[1];
      }
    }
    this.setState({
      ingredients: ingredientObj,
      totalPrice: price
    });
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-detail');
    // this.props.history.location.pathname + '/checkout/contact-data';
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancel={this.checkoutCancelHandler}
          checkoutContinue={this.checkoutContinueHandler}
          ingredients={this.state.ingredients}
        />
        <Route
          path={this.props.match.path + '/contact-detail'}
          // component={ContactDetail}
          render={(props) => <ContactDetail ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />}
        />
      </div>
    );
  }
}
export default Checkout;
