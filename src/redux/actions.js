export const ADD_FEEDBACK = 'ADD_FEEDBACK';
export const DELETE_FEEDBACK = 'DELETE_FEEDBACK';

export const addFeedback = (data) => ({
  type: ADD_FEEDBACK,
  payload: data,
});

export const deleteFeedback = (feedbackId) => ({
  type: DELETE_FEEDBACK,
  payload: feedbackId,
});
