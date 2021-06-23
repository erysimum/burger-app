import classes from '../Burger/Burger.module.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import { withRouter } from 'react-router-dom';

const burger = (props) => {
  /*  const transformIngredients = Object.keys(props.ingredients).map((igKey) => {
    // console.log(transformIngredient);
    //console.log(igKey);
    // console.log([Array(props.ingredients[igKey])]);
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  }); */
  //console.log(props);  now we get history object here

  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, index) => {
        return <BurgerIngredient key={igKey + index} type={igKey} />;
      });
    })
    .reduce((accumulator, curValue) => {
      return accumulator.concat(curValue);
    }, []);
  //console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add your fav ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />

      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};
export default withRouter(burger);
