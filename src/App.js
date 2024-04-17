import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Components/Form';
import Edit from './Components/Edit';



function App() {
 
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/edit" element={<Edit />} /> 
    </Routes>
  </Router>
  );
}

export default App;
