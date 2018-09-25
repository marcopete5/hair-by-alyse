import React, { Component } from 'react';
import {connect} from 'react-redux';
import QuoteCard from './QuoteCard';

class QuoteList extends Component {
    constructor(){
        super()

        this.state = {
            quote: {},
            clicked: false
        }
    }

    showCard = quote => {
        this.setState({quote, clicked: true})
    }
    render() {
        return (
            <div>
                <div id='nameList'>
                    {this.props.quotes.map((quote, i) => <h3 onClick={() => this.showCard(quote)}>{quote.fName} {quote.lName}</h3>)}
                </div>
                {this.state.clicked ?
                    <QuoteCard quote={this.state.quote} /> 
                    :
                    <h3 id='instructions'>Click a name to view appointment details</h3>
                }
            </div>
        );
    }
}

export default connect(state => state, null)(QuoteList);