import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const DashboardPage = () => {
  const { user } = useContext(GlobalContext)
  return (
    <>
      <h2>Halaman Dashboard</h2>
      <h2>
        Dashboard (Protected: authenticated user with LOGIN)
      </h2>
      <p />{JSON.stringify(user)}
    </>
  );
};

export default DashboardPage