//src/pages/GlobalContext.jsx
import { createContext } from 'react'
//1 import data user 
import { tbUser } from '../datadummy/user';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext()

function GlobalProvider({ children }) {
  const navigate = useNavigate();

  const [pesan, setPesan] = useState("")
  //2. state user
  const [user, setUser] = useState(null);
  function fungsiGlobal() {
    console.log("Perintah Menjalankan Fungsi di Global Context");
  }

  function LoginUser(UserNameLogin, UserPasswordLogin) {
    console.log("LOGIN DATA", UserNameLogin, UserPasswordLogin);
    //3. cari user
    const hasilCari = tbUser.find(({ username }) => username.toLowerCase() === UserNameLogin.toLowerCase())
    //4. jika user ketemu => simpan ke user dan lanjut ke halaman dashboard
    if (hasilCari) {
      console.log("Hasil :", hasilCari)
      setUser(hasilCari)
      return navigate('/dashboard')
      //4. jika user tidak ketemu => tampilkan pesan ke Login Page
    } else {
      tampilPesan("USER TIDAK ADA")
    }
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
    LoginUser, user
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}
export default GlobalProvider

