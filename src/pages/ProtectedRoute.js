import { useUser } from "../context/UserContext"
import { Outlet, Navigate } from "react-router-dom"

const ProtectedRouter = () => {
  const { user } = useUser()

  return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRouter
