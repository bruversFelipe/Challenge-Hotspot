import { createStore } from 'redux';
import hotspotReducer from './Redux';

const store = createStore(hotspotReducer);

export default store;
