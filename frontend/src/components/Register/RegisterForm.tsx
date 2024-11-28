import { customAxios } from "@/axios/Axios"
import { toast, Toaster } from "sonner"

const RegisterForm = () => {

    async function crearUser(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const dataForm = Object.fromEntries(new FormData(event.currentTarget))
        const request = await customAxios.post("admin",{name: dataForm.name, email: dataForm.email, password: dataForm.password})
        if(request.status === 201){
            toast.success("Usuario creado correctamente.")
        }
        toast.error("Ocurrió un error al registrar el usuario")
    }



  return (
    <div className='border text-card-foreground w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden'>
        <section >
            <section className='flex flex-col space-y-1.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6'>
                Registro de usuarios
            </section>
            <form className='p-4' onSubmit={crearUser} >
                <div className='w-full flex flex-col gap-3'>
                    <label htmlFor="name" className='flex flex-col w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 gap-2'>
                        Nombre:
                        <input type="text" name='name' required id='name' className='p-2 border rounded' />
                    </label>
                    <label htmlFor="email" className='flex flex-col w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 gap-2'>
                        Correo electrónico:
                        <input type="text" name='email' required id='email' className='p-2 border rounded' />
                    </label>
                    <label htmlFor="password" className='flex flex-col w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 gap-2'>
                        Contraseña:
                        <input type="password" name='password' required id='password' className='p-2 border rounded' />
                    </label>

                </div>
                <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white'>
                    Registrarse
                </button>
            </form>
            <div className="items-center flex justify-center p-6 bg-gray-50">
                <a href="/" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-10 px-4 py-2 text-purple-600 hover:text-purple-700">¿Tienes una cuenta?, inicia sesión</a>
            </div>
        </section>
        <Toaster richColors/>
    </div>
  )
}

export default RegisterForm