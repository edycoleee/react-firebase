import { useContext } from "react"
import { GlobalContext } from "./GlobalContext"


function Logout() {
  const { LogoutUser } = useContext(GlobalContext)
  return (
    <div>
      <h3>
        Logout
      </h3>
      <button onClick={() => LogoutUser()}>LOGOUT</button>
    </div>
  )
}

export default Logout