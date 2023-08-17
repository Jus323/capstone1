import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { SignUpPage } from './pages/SignUpPage'
import { ProtectedRoute } from "./components/ProtectedRoute";
import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
    </Routes>
    </div>
  );
}

export default App;
