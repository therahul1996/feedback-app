export const ADD_FEEDBACK = 'ADD_FEEDBACK';
export const DELETE_FEEDBACK = 'DELETE_FEEDBACK';
export const SET_FEEDBACK_QUERY = 'SET_FEEDBACK_QUERY';
export const UPDATE_FILTERED_DATA = 'UPDATE_FILTERED_DATA';

export const addFeedback = (data) => ({
  type: ADD_FEEDBACK,
  payload: data,
});

export const deleteFeedback = (feedbackId) => ({
  type: DELETE_FEEDBACK,
  payload: feedbackId,
});