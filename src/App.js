import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import FormPage from './Pages/FormPage';
import Verify from './Pages/Verify';
import Visual from './Pages/Visual';
import Error from './Pages/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/interest" element={<Home/>} />
        <Route path="/input" element={<FormPage/>} />
        <Route path="/verify" element={<Verify/>} />
        <Route path="/visual" element={<Visual/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
  );
}
export default App;
