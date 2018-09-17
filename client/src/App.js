import React, { Component } from 'react';
import Carousel from './Carousel';
import Quote from './Quote';
import FAQ from './FAQ';
import Pricing from './Pricing';
import Admin from './Admin';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Carousel} />
          <Route path='/quote' component={Quote} />
          <Route path='/faq' component={FAQ} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </div>
    );
  }
}

export default App;
