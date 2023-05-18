//src/pages/HomePage.jsx
import { useContext } from "react"
import { GlobalContext } from "./GlobalContext"

export default function HomePage() {
  const { pesan, fungsiGlobal } = useContext(GlobalContext)
  return (
    <>
      <h2>Halaman Home</h2>
      <h4>{pesan}</h4>
      <button onClick={() => fungsiGlobal()}>FungsiGlobal</button>
    </>
  )
}