import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/auth" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
