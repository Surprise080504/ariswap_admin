import { BEFORE_NFT, GET_NFTS, DELETE_NFT } from '../../redux/types';

const initialState = {
    nfts: null,
    pagination: null,
    getNftsAuth: false,
    nftId: null,
    nftDelAuth: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_NFTS:
            return {
                ...state,
                nfts: action.payload.nfts,
                pagination: action.payload.pagination,
                getNftsAuth: true
            }
        case BEFORE_NFT:
            return {
                ...state,
                nfts: null,
                pagination: null,
                getNftsAuth: false,
                nftId: null,
                nftDelAuth: false
            }
        case DELETE_NFT:
            return {
                ...state,
                nftId: action.payload.nftId,
                nftDelAuth: true
            }
        default:
            return {
                ...state
            }
    }
}