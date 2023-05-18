//App.jsx
import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import UsersPage from './pages/UsersPage';
import DashboardPage from './pages/DashboardPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Navigation from './pages/NavigationPage';

function App() {
  return (
    <>
      <h2>Belajar React Router</h2>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="admin" element={<AdminPage />} />
      </Routes>
    </>
  )
}

export default App

