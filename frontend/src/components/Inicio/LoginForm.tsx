import { customAxios } from "@/axios/Axios"
import BlurFade from "../ui/blur-fade"
import { toast } from "sonner"
import { UseAdminStore } from "@/Store/AdminStore"

const LoginForm = () => {

    const settoken = UseAdminStore(state=> state.setToken)

    async function login(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const dataForm = Object.fromEntries(new FormData(event.currentTarget))
        const request = await customAxios.post("admin/login", dataForm, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        if(request.status===200){
            localStorage.setItem("token", request.data.token)
            settoken(request.data.token)
            toast.success("Login exitoso.")
            setTimeout(()=>{
                location.href = "/administracion"
            },2000)
            return
        }
        if(request.status ===401){
            toast.error("Ocurrió un error intena de nuevo.")
        }
    }


  return (
    <BlurFade className="border text-card-foreground w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden" delay={0.2} inView>
    <div className='border text-card-foreground w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden'>
        <section >
            <section className='flex flex-col space-y-1.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6'>
                Iniciar sesión
            </section>
            <form className='p-4' onSubmit={login} >
                <div className='w-full flex flex-col gap-3'>
                    <label htmlFor="email" className='flex flex-col w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 gap-2'>
                        Correo electrónico:
                        <input type="text" required name='email' id='email' className='p-2 border rounded' />
                    </label>
                    <label htmlFor="password" className='flex flex-col w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 gap-2'>
                        Contraseña:
                        <input type="password" required name='password' id='password' className='p-2 border rounded' />
                    </label>

                </div>
                <button type="submit" className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white'>
                    Iniciar sesión
                </button>
            </form>
            <div className="items-center flex justify-center p-2 bg-gray-50">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-10 px-4 py-2 text-purple-600 hover:text-purple-700">¿Olvidaste tu contraseña?</button>
            </div>
            <div className="items-center flex justify-center p-2 bg-gray-50">
                <a href="/registrar" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-10 px-4 py-2 text-purple-600 hover:text-purple-700">¿Aún no tienes una cuenta?, regístrate</a>
            </div>
        </section>
    </div>
    </BlurFade>
  )
}

export default LoginForm