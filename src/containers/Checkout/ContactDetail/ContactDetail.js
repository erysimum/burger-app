import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from '../ContactDetail/ContactDetail.module.css';
import axios from '../../../axios-orders';

class ContactDetail extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postCode: ''
    }
  };

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Alex Pallister',
        address: {
          street: 'Dixon Street',
          postcode: '2345',
          country: 'Australia'
        },
        email: 'alex@worldmarketing.com'
      },
      deliverymethod: 'fastest'
    };
    axios
      .post('/orders.json', order)
      .then((response) => {
        console.log(response);
        this.props.history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className={classes.ContactDetail}>
        <form>
          <h1>Enter Your Contact Details:</h1>
          <input className={classes.Input} type='text' name='name' placeholder='Name' />
          <input className={classes.Input} type='email' name='email' placeholder='Email' />
          <input className={classes.Input} type='text' name='street' placeholder='Street' />
          <input className={classes.Input} type='text' name='postcode' placeholder='Postcode' />
          <Button clicked={this.orderHandler} btnType='Success'>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}
export default ContactDetail;
