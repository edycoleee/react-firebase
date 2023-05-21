//src/pages/SignUpPage.jsx
import { useContext, useState } from "react";
import { GlobalContext } from "./GlobalContext";

const checkListRole = ["admin", "user"];

const SignupPage = () => {
  const { SignUpUser, pesan } = useContext(GlobalContext)
  const [UserName, setUserName] = useState("")
  const [UserPassword, setUserPassword] = useState("")
  const [checked, setChecked] = useState([]);

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
      return total + ", " + item;
    })
    : "";

  return (
    <>
      <h2>Halaman Signup</h2>
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
      <h4>Select Role : </h4>
      {checkListRole.map((item, index) => (
        <div key={index}>
          <input value={item} type="checkbox" onChange={handleCheck} />
          <span>{item}</span>
        </div>
      ))}
      <div>
        {`Items checked are: ${checkedItems}`}
      </div>
      <p />
      <button onClick={() => SignUpUser(UserName, UserPassword, checked)}> SIGNUP </button >
      <p />{pesan}
    </>
  );
};

export default SignupPage;