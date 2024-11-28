import { UseAdminStore } from "@/Store/AdminStore";
import { Outlet, Navigate } from "react-router-dom";

const ProteccionAdmin = () => {
    const token = UseAdminStore(state=> state.token)

    if(token){
        return (
          <Outlet/>
        )
    }else{
        return (
            <Navigate to={"/"} replace/>
        )
    }
}

export default ProteccionAdmin