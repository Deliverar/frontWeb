import { createContext, useContext, useState } from "react"

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Martin",
    email: "Luka",
    photo: "dsjbdgjkb",
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)

export default UserProvider
