import { UseAdminStore } from "@/Store/AdminStore";
import { Outlet, Navigate } from "react-router-dom";



const PublicProteccion = () => {
    const adminAuth = UseAdminStore(state=> state.token)
    console.log(adminAuth);
    
    if(adminAuth){
        return <Navigate to={"/administracion"} replace/>
    }
    return (
      <Outlet/>
    )
}

export default PublicProteccion