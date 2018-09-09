import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initState = {
    quotes: []
}

export const addQuote = (quote) => {
    console.log(quote)
    return {
        type: 'ADD_QUOTE',
        quote
    }
}

const reducer = (prevState = initState, action) => {
    switch(action.type){
        case 'ADD_QUOTE':
            return {
                quotes: [...prevState.quotes, action.quote]
            }
        default: 
            return prevState
    }
}



export default createStore(reducer, applyMiddleware(thunk))