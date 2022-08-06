import { createStore,combineReducers  } from 'redux'

import user from './reducers/user';
import chats from './reducers/chats';
const combine=combineReducers({
    user: user,
    chats: chats
})
const store = createStore(combine)
export default store