//src/pages/LoginPage.jsx
import { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const LoginPage = () => {
  const { LoginUser, pesan } = useContext(GlobalContext)
  const [UserName, setUserName] = useState("")
  const [UserPassword, setUserPassword] = useState("")

  return (
    <>
      <h2>Halaman Login</h2>
      <label htmlFor="item">User Name</label> {" : "}
      <input type="text"
        value={UserName}
        onChange={e => setUserName(e.target.value)}
        id="item" /><p />
      <label htmlFor="item">Password</label> {" : "}
      <input type="text"
        value={UserPassword}
        onChange={e => setUserPassword(e.target.value)}
        id="item" /><p />
      <button onClick={() => LoginUser(UserName, UserPassword)}> LOGIN </button >
      <p />{pesan}
    </>
  );
};

export default LoginPage