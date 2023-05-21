//src/pages/DashboardPage.jsx
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const { user } = useContext(GlobalContext)
  return (
    <>
      <h2>Halaman Dashboard</h2>
      <h2>
        Dashboard (Protected: authenticated user with LOGIN)
      </h2>
      <Link to="/dtpasien">Data Pasien</Link> {" | "}
      <p />{JSON.stringify(user)}
    </>
  );
};

export default DashboardPage