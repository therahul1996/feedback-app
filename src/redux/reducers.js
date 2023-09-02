import { ADD_FEEDBACK, DELETE_FEEDBACK } from './actions';
import feedbackData from '../data/feedback.json'
const initialState = {
  feedbacks: feedbackData.slice().sort((a, b) => b.id - a.id),
  searchQuery: '',
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEEDBACK:
      const newFeedback = {
        id: state.feedbacks.length + 1,
        name: action.payload.name,
        url: URL.createObjectURL(action.payload.photo),
        date: action.payload.date,
        title: action.payload.title,
        desc: action.payload.desc,
      };
      return {
        ...state,
        feedbacks: [newFeedback, ...state.feedbacks],
      };
      case DELETE_FEEDBACK:
      const updatedFeedbacks = state.feedbacks.filter(feedback => feedback.id !== action.payload);
      return {
        ...state,
        feedbacks: updatedFeedbacks,
      };
    default:
      return state;
  }
};

export default feedbackReducer;
