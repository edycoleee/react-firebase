import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link to="/">Home</Link> {" | "}
      <Link to="/login">Login</Link> {" | "}
      <Link to="/signup">SignUp</Link> {" | "}
      <Link to="/dashboard">Dashboard</Link> {" | "}
      <Link to="/users">User</Link> {" | "}
      <Link to="/admin">Admin</Link> {" | "}
    </nav>
  );
};

export default Navigation