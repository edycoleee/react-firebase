//src/pages/GlobalContext.jsx
import { createContext } from 'react'
import { tbUser } from '../datadummy/user';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext()

function GlobalProvider({ children }) {
  const navigate = useNavigate();
  const [pesan, setPesan] = useState("")
  const [user, setUser] = useState(null);
  function fungsiGlobal() {
    console.log("Perintah Menjalankan Fungsi di Global Context");
  }
  //Auth Login
  const fakeAuthLogin = (UserNameLogin) =>
    new Promise((resolve) => {
      const hasilCari = tbUser.find(({ username }) => username.toLowerCase() === UserNameLogin.toLowerCase())
      //setTimeout(() => resolve('2342f2f1d131rf12'), 250);
      setTimeout(() => resolve(hasilCari), 750);
    });
  //Auth Logout
  const fakeAuthLogout = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(null), 750);
    });
  //Auth SignUp
  const fakeAuthSignUp = (UserNameSignUp, UserPasswordSignUp, roleUser) =>
    new Promise((resolve) => {
      tbUser.push({
        id: '3',
        username: UserNameSignUp,
        namauser: 'user tiga',
        password: UserPasswordSignUp,
        roles: roleUser,
      })
      const hasilCari = tbUser.find(({ username }) => username.toLowerCase() === UserNameSignUp.toLowerCase())
      setTimeout(() => resolve(hasilCari), 750);
    });
  //Login User
  async function LoginUser(UserNameLogin, UserPasswordLogin) {
    console.log("LOGIN DATA", UserNameLogin, UserPasswordLogin);
    await fakeAuthLogin(UserNameLogin).then((hasil) => {
      console.log("Hasil :", hasil)
      if (hasil) {
        console.log("Hasil :", hasil)
        setUser(hasil)
        return navigate('/dashboard')
      } else {
        tampilPesan("USER TIDAK ADA")
      }
    }).catch((error) => {
      console.log(error);
    })
  }
  //Logout User
  async function LogoutUser() {
    console.log("LOGOUT");
    await fakeAuthLogout().then(() => {
      setUser(null)
      return navigate('/')
    }).catch((error) => {
      console.log(error);
    })
  }
  //SignUp User
  async function SignUpUser(UserName, UserPassword, roleUser) {
    if (!UserName || !UserPassword || roleUser.length === 0) return tampilPesan("DATA TIDAK LENGKAP")
    console.log("SignUpUser", UserName, UserPassword, roleUser);
    await fakeAuthSignUp(UserName, UserPassword, roleUser).then((hasil) => {
      setUser(hasil)
      return navigate('/dashboard')
    }).catch((error) => {
      console.log(error);
    })
  }

  // fungsi tampil pesan
  function tampilPesan(isipesan) {
    setPesan(isipesan)
    setTimeout(() => {
      setPesan("")
    }, 3000)
  }

  let value = {
    pesan,
    fungsiGlobal,
    LoginUser, user, LogoutUser, SignUpUser
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}
export default GlobalProvider

