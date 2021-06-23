import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';
import Checkout from '../src/containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import ContactDetail from './containers/Checkout/ContactDetail/ContactDetail';

class App extends Component {
  render() {
    return (
      // <div>
      //   <Layout>
      //     <BurgerBuilder />
      //     <Checkout />
      //   </Layout>
      // </div>

      <div>
        <Layout>
          <Switch>
            <Route path='/' exact component={BurgerBuilder} />
            <Route path='/checkout' component={Checkout} />
          </Switch>

          {/* <Route
              path='/checkout/contact-data'
              exact
              component={ContactDetail}
            /> */}
        </Layout>
      </div>
    );
  }
}

export default App;
