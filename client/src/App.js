import React, { Component } from 'react';

// my components
import Carousel from './Carousel';
import Quote from './Quote';
import FAQ from './FAQ';
import Pricing from './Pricing';
import Admin from './Admin';

//router
import {Switch, Route, withRouter} from 'react-router-dom';

//redux
import { connect } from 'react-redux';
import {getAllQuotes} from './redux';

class App extends Component {

  componentDidMount(){
    this.props.getAllQuotes()
  }

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

export default withRouter(connect(null, {getAllQuotes})(App));
