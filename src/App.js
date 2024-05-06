import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './pages/dashboard';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/auth" element={<LoginPage />} />
            <Route path="" element={<LoginPage />} />
            <Route path="/index" element={<PrivateRoute />}>
              <Route path="dash" index element={<Dashboard />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
