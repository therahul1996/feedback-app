import { createStore } from 'redux';
import feedbackReducer from './reducers';

const store = createStore(feedbackReducer);

export default store;
