import React from "react";
import classes from "../BuildControls/BuildControls.module.css";
import BuildControl from "../BuildControls/BuildControl/BuildControl";

const controls = [
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Salad", type: "salad" },
];
const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price : <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        itemAdded={() => props.added(ctrl.type)}
        itemRemoved={() => props.removed(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);
export default buildControls;
