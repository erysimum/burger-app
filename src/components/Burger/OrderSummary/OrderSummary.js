import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

// const orderSummary = (props) => {
//   const summaryIngredients = Object.keys(props.ingredients).map((igKey) => {
//     return (
//       <li key={igKey}>
//         <span style={{ textTransform: "capitalize" }}>
//           {igKey} : {props.ingredients[igKey]}
//         </span>
//       </li>
//     );
//   });
//   return (
//     <Aux>
//       <h3>Your Order!!</h3>
//       <p>Delicious Burger with following ingredients!</p>
//       <ul>{summaryIngredients}</ul>
//       <p>Ready to Checkout?</p>
//       <p>
//         <strong>Total Price:{props.price.toFixed(2)}</strong>
//       </p>
//       <Button btnType='Danger' clicked={props.purchaseCancel}>
//         Cancel
//       </Button>
//       <Button btnType='Success' clicked={props.purchaseContinue}>
//         Continue
//       </Button>
//     </Aux>
//   );
// };
// export default orderSummary;

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("[OrderSummar will update]");
  }

  render() {
    const summaryIngredients = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>
              {igKey} : {this.props.ingredients[igKey]}
            </span>
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order!!</h3>
        <p>Delicious Burger with following ingredients!</p>
        <ul>{summaryIngredients}</ul>
        <p>Ready to Checkout?</p>
        <p>
          <strong>Total Price:{this.props.price.toFixed(2)}</strong>
        </p>
        <Button btnType='Danger' clicked={this.props.purchaseCancel}>
          Cancel
        </Button>
        <Button btnType='Success' clicked={this.props.purchaseContinue}>
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
