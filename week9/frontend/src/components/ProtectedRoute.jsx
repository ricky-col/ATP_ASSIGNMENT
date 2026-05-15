import { useAuth } from "../store/authstate"
import { useNavigate,Navigate } from "react-router"
import Unauthorized from "./Unauthorized"

function ProtectedRoute({children,allowedRoles}) {

    const {loading,currentUser,isAuthenticated}=useAuth()
    if(loading){
        return <div className="flex justify-center items-center h-screen"><p className="text-2xl font-semibold">Loading...</p></div>
    }
    if(!isAuthenticated){
        return <Navigate to="/login" replace/>
    }
    const userRole = currentUser?.role?.toUpperCase();
    const allowed = allowedRoles?.map(r => r.toUpperCase());
    if(allowed && !allowed.includes(userRole)){
        return <Unauthorized redirectTo="/"/>
    }
  return (children)
}

export default ProtectedRoute
