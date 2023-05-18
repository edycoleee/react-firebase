//App.jsx
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import UsersPage from './pages/UsersPage';
import DashboardPage from './pages/DashboardPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Navigation from './pages/NavigationPage';
import { useContext } from 'react';
import { GlobalContext } from './pages/GlobalContext';

function App() {
  const { user } = useContext(GlobalContext)
  return (
    <>
      <h2>Belajar React Router</h2>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="users" element={<UsersPage />} />
          {/* <Route path="admin" element={<AdminPage />} /> */}
        </Route>
        <Route
          path="admin"
          element={
            <ProtectedRoute
              redirectPath="/dashboard"
              isAllowed={!!user && user.roles.includes('admin')}
            >
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  )
}

const ProtectedRoute = ({
  isAllowed,
  redirectPath = '/',
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

export default App

