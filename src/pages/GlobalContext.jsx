//src/pages/GlobalContext.jsx
import { createContext } from 'react'
import { tbUser } from '../datadummy/user';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
//import data user 

export const GlobalContext = createContext()

function GlobalProvider({ children }) {
  const navigate = useNavigate();

  const [pesan, setPesan] = useState("")
  function fungsiGlobal() {
    console.log("Perintah Menjalankan Fungsi di Global Context");
  }

  const [user, setUser] = useState(null);

  async function LoginUser(UserNameLogin, UserPasswordLogin) {
    console.log("LOGIN DATA", UserNameLogin, UserPasswordLogin);
    const hasilCari = tbUser.find(({ username }) => username.toLowerCase() === UserNameLogin.toLowerCase())
    if (hasilCari) {
      console.log("Hasil :", hasilCari)
      setUser(hasilCari)
      return navigate('/dashboard')
    } else {
      tampilPesan("USER TIDAK ADA")
    }
  }

  function tampilPesan(isipesan) {
    setPesan(isipesan)
    setTimeout(() => {
      setPesan("")
    }, 3000)
  }

  let value = {
    pesan,
    fungsiGlobal,
    LoginUser, user
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}
export default GlobalProvider

