import { BEFORE_AUCTION, GET_AUCTION } from '../../redux/types';

const initialState = {
    auctions: null,
    pagination: null,
    getAuctionsAuth: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_AUCTION:
            return {
                ...state,
                auctions: action.payload.auctions,
                pagination: action.payload.pagination,
                getAuctionsAuth: true
            }
        case BEFORE_AUCTION:
            return {
                ...state,
                auctions: null,
                pagination: null,
                getAuctionsAuth: false
            }
        default:
            return {
                ...state
            }
    }
}