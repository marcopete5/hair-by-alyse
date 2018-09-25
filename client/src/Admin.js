import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuoteList from './QuoteList';
import AdminNav from './AdminNav';


class Admin extends Component {
    render() {
        return (
            <div id='adminContainer'>
                <AdminNav />
                <QuoteList />
            </div>
        );
    }
}

export default connect(state => state, null)(Admin);