import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { ForgotPasswordPage } from './pages/ForgotPasswordPage'
import { ProtectedRoute } from "./components/ProtectedRoute";
import './App.css';
import { AuthProvider } from './hooks/useAuth';
import { ProfileEditPage } from './pages/ProfileEditPage'
import { UnprotectedRoute } from './components/UnprotectedRoute'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route 
            path="/" 
            element={
              <UnprotectedRoute>
                <LoginPage />
              </UnprotectedRoute>
            } 
          />
          <Route path="/register" element={
              <UnprotectedRoute>
                <RegisterPage />
              </UnprotectedRoute>
            }  />
          <Route path="/forgotpassword" element={
              <UnprotectedRoute>
                <ForgotPasswordPage />
              </UnprotectedRoute>
            }  />
          <Route 
            path="/profileedit" 
            element={
              <ProtectedRoute>
                <ProfileEditPage />
              </ProtectedRoute>
              } 
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
