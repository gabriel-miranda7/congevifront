import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/auth" element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
