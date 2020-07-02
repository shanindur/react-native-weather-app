import { createStore } from 'redux';
import reducer from '../reducers/reducer';

const Store = createStore(reducer);

export default Store;
