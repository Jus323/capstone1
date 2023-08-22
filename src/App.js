import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
<<<<<<< HEAD
import './App.css';
import { AuthProvider } from './hooks/useAuth';
import { ProfileEditPage } from './pages/ProfileEditPage'
=======
import "./App.css";
import { AuthProvider } from "./hooks/useAuth";
import { ProfileEditPage } from "./pages/ProfileEditPage";
import { UnprotectedRoute } from "./components/UnprotectedRoute";
>>>>>>> 5ca3f8d712c37b642c5830c0eeb1f49895385e0e

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
          <Route path="/profileedit" element={<ProfileEditPage />} />
=======
          <Route
            path="/"
            element={
              <UnprotectedRoute>
                <LoginPage />
              </UnprotectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <UnprotectedRoute>
                <RegisterPage />
              </UnprotectedRoute>
            }
          />
          <Route
            path="/forgotpassword"
            element={
              <UnprotectedRoute>
                <ForgotPasswordPage />
              </UnprotectedRoute>
            }
          />
          <Route
            path="/profileedit"
            element={
              <ProtectedRoute>
                <ProfileEditPage />
              </ProtectedRoute>
            }
          />
>>>>>>> 5ca3f8d712c37b642c5830c0eeb1f49895385e0e
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
