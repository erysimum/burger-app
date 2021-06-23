import React from "react";
import classes from "../NavigationItems/NavigationItems.module.css";
import NavigationItem from "../../Navigation/NavigationItems/NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' active={true}>
      Burger Builder
    </NavigationItem>
    <NavigationItem link='/'> CheckOut</NavigationItem>
  </ul>
);
export default navigationItems;
