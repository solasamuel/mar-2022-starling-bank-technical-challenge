import {
    GET_ACCOUNTS_REQUEST,
    GET_ACCOUNTS_SUCCESS,
    GET_ACCOUNTS_FAIL,
    GET_FEED_REQUEST,
    GET_FEED_SUCCESS,
    GET_FEED_FAIL,
    CLEAR_ERRORS,
} from './Constants'

export const accountsReducer = (state = { accounts: [] }, action) => {
    switch(action.type) {
        case GET_ACCOUNTS_REQUEST:
            return {
                loading: true,
                accounts: []
            }

        case GET_ACCOUNTS_SUCCESS:
            return {
                loading: false,
                accounts: action.payload.accounts
            }

        case GET_ACCOUNTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const feedReducer = (state = { feedItems: [] }, action) => {
    switch(action.type) {
        case GET_FEED_REQUEST:
            return {
                loading: true,
                feedItems: []
            }

        case GET_FEED_SUCCESS:
            return {
                loading: false,
                feedItems: action.payload.feedItems
            }

        case GET_FEED_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}