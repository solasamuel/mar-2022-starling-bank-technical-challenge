import axios from 'axios'

import {
    GET_ACCOUNTS_REQUEST,
    GET_ACCOUNTS_SUCCESS,
    GET_ACCOUNTS_FAIL,
    GET_FEED_REQUEST,
    GET_FEED_SUCCESS,
    GET_FEED_FAIL,
    CLEAR_ERRORS,
} from './Constants'

export const getAccounts = () => async (dispatch) => {
    try {

        dispatch({ type: GET_ACCOUNTS_REQUEST })

        const { data } = await axios.get('/api/accounts')

        dispatch({
            type: GET_ACCOUNTS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: GET_ACCOUNTS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getFeed = (account, category, sinceDate) => async (dispatch) => {
    try {

        dispatch({ type: GET_FEED_REQUEST })

        const { data } = await axios.get('/api/feed', {
            params: {
                accountUid: account,
                categoryUid: category,
                changesSince: sinceDate
            }
        })

        dispatch({
            type: GET_FEED_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: GET_FEED_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}