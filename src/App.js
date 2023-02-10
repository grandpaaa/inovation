import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Rules from './pages/rules';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/rules" element={<Rules/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
