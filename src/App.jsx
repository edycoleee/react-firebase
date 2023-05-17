import { useState } from 'react'
import './App.css'

function App() {
  const [kolom1, setKolom1] = useState("")
  const [kolom2, setKolom2] = useState("")
  const [kolom3, setKolom3] = useState("")
  const [pesan, setPesan] = useState("")
  function simpanData() {
    console.log("SIMPAN DATA", kolom1, kolom2, kolom3);
    clearData()
    setPesan("SUKSES SIMPAN DATA")
    tampilPesan()
  }

  function tampilPesan() {
    setTimeout(() => {
      setPesan("")
    }, 3000)
  }

  function clearData() {
    setKolom1("")
    setKolom2("")
    setKolom3("")
  }

  return (
    <>
      <h2>React Firebase</h2>
      <label htmlFor="item">Kolom1</label> {" : "}
      <input type="text"
        value={kolom1}
        onChange={e => setKolom1(e.target.value)}
        id="item" /><p />
      <label htmlFor="item">Kolom2</label> {" : "}
      <input type="text"
        value={kolom2}
        onChange={e => setKolom2(e.target.value)}
        id="item" /><p />
      <label htmlFor="item">Kolom3</label> {" : "}
      <input type="text"
        value={kolom3}
        onChange={e => setKolom3(e.target.value)}
        id="item" /><p />
      <button onClick={() => simpanData()}> SIMPAN</button >
      <p />{pesan}
    </>
  )
}

export default App
