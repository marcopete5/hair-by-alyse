import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initState = {
    quotes: []
}

export const getAllQuotes = () => {
    return dispatch => {
        axios.get('/api/quotes').then(response => {
            dispatch({
                type: 'GET_ALL_QUOTES',
                quotes: response.data.quote
            })
        })
    }
}

export const addQuote = (quote) => {
    return dispatch => {
        axios.post('/api/quotes', quote).then(response => {
            dispatch({
                type: 'ADD_QUOTE',
                quote: response.data
            })
        })
    }
}

const reducer = (prevState = initState, action) => {
    switch(action.type){
        case 'GET_ALL_QUOTES':
            return {
                quotes: action.quotes
            }
        case 'ADD_QUOTE':
            return {
                quotes: [...prevState.quotes, action.quote]
            }
        default: 
            return prevState
    }
}



export default createStore(reducer, applyMiddleware(thunk))