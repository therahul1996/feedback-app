
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import GridContent from './components/GridContent';
import ListContent from './components/ListContent';
import AddContent from './components/AddContent'
import feedbackData from './data/feedback.json'
import { useState } from 'react';
function App() {
  const [feedbacks, setFeedbacks] = useState(feedbackData)
  const addFeedback = newFeedback => {
    setFeedbacks([...feedbacks, {...newFeedback, id: feedbacks.length + 1}]);
  }
  const deleteFeedback = feedbackID => {
    const updateFeedback = feedbacks.filter(feedback => feedback.id !== feedbackID);
    setFeedbacks(updateFeedback);
  }
  return (
    <BrowserRouter>
    <Sidebar />
      <Routes>
        <Route path="/" element={<GridContent feedbacks={feedbacks} deleteFeedback={deleteFeedback} />} />
        <Route path="/add-content" element={<AddContent newData={addFeedback} />} />
        <Route path="/list-content" element={<ListContent feedbacks={feedbacks} deleteFeedback={deleteFeedback} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
