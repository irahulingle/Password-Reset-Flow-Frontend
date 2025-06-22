import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ResetPassword from './components/ResetPassword.jsx';

function App() {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">Password Reset App</Link>
          <div>
            {isLoggedIn ? (
              <button
                className="btn btn-outline-light"
                onClick={() => {
                  localStorage.removeItem('token');
                  window.location.reload(); // reload to update UI
                }}
              >
                Logout
              </button>
            ) : (
              <>
                <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
                <Link className="btn btn-outline-light me-2" to="/register">Register</Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <div className="container py-5">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
