import { combineReducers } from 'redux'
import adminReducer from '../views/Admin/Admin.reducer'
import categoryReducer from '../views/Categories/Categories.reducer'
import userReducer from 'views/Users/Users.reducer'
import collectionReducer from '../views/Collection/Collection.reducer'
import errorReducer from './shared/error/error.reducer'
import nftsReducer from 'views/Nfts/nfts.reducer'
import auctionsReducer from '../views/LiveAuctions/liveAuctions.reducer'
import emailReducer from '../views/EmailTemplates/EmailTemplates.reducer'
import settingsReducer from '.././views/Settings/settings.reducer'
import faqReducer from 'views/Faq/Faq.reducer'
import ContactsReducer from 'views/Contacts/Contacts.reducer'

export default combineReducers({
    admin: adminReducer,
    category: categoryReducer,
    user: userReducer,
    collection: collectionReducer,
    error: errorReducer,
    nfts: nftsReducer,
    auctions: auctionsReducer,
    email: emailReducer,
    settings: settingsReducer,
    faqs: faqReducer,
    contacts: ContactsReducer
})