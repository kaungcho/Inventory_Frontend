import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import CategoryReducer from './CategoryReducer';
import ProductReducer from './ProductReducer';

const rootReducer = combineReducers({
    auth : LoginReducer,
    category: CategoryReducer,
    product: ProductReducer,
});

export default rootReducer;
