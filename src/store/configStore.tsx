import {createStore} from 'redux';
import {rootReducer} from '../reducer/RootReducer'

const configStore = () => createStore(rootReducer);

export {configStore}
