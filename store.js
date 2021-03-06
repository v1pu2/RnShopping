import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import authReducer from './src/redux/reducers/AuthReducer';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cartReducer from './src/redux/reducers/CartReducer';


const appReducers = combineReducers({
  AuthReducer: authReducer,
  CartReducer: cartReducer,
});
const rootReducer = (state, action) => appReducers(state, action);
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const initialState = {};
const middleware = [thunk];
const store = createStore(
  persistedReducer,
  initialState,
  compose(applyMiddleware(...middleware)),
);
const persistor = persistStore(store);

export {store, persistor};