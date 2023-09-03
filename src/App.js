
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import GridContent from './components/GridContent';
import ListContent from './components/ListContent';
import AddContent from './components/AddContent'
import Chart from './components/Chart';
function App() {
  return (
    <BrowserRouter>
    <Sidebar />
      <Routes>
        <Route path="/" element={<GridContent />} />
        <Route path="/add-content" element={<AddContent />} />
        <Route path="/list-content" element={<ListContent />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
