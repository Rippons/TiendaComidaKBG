import { toast } from "sonner"

const HeaderAdmin = () => {

  function logout() {
    localStorage.clear()
    toast.info("Cierre de sesión exitoso")
    setTimeout(()=>{
      location.href = "/"
    },1000)
  }


  return (
    <header className="w-full bg-gradient-to-r from-purple-600 to-blue-600 p-4 shadow-md ">
        <div className="container mx-auto flex justify-between items-center text-white">
            <h1>Administración</h1>
            <button className=" border bg-red-500 max-w-40 w-full p-2 rounded-sm transition-all duration-300 hover:scale-110" onClick={logout}>Salir</button>
        </div>
    </header>
  )
}

export default HeaderAdmin