import React, { Component } from "react";
import classes from "../Modal/Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

// const modal = (props) => (
//   <Aux>
//     <Backdrop show={props.show} modalClose={props.modalClose} />
//     <div
//       className={classes.Modal}
//       style={{
//         transform: props.show ? "translate(0)" : "translateY(-100vh)",
//         opacity: props.show ? "1" : "0",
//       }}
//     >
//       {props.children}
//     </div>
//   </Aux>
// );
// export default modal;

class Modal extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.show !== this.props.show) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.show !== this.props.show) {
      return true; //render
    } else {
      return false; //don't render
    }
  }

  componentWillUpdate() {
    console.log("[Modal will update]");
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} modalClose={this.props.modalClose} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translate(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}
export default Modal;
