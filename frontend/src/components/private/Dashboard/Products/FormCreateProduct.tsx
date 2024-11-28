import BlurFade from '@/components/ui/blur-fade'
import  { useState } from 'react'
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  } from "@/components/ui/select"
import { customAxios } from '@/axios/Axios';
import { toast } from 'sonner';

const FormCreateProduct = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    async function createProduct(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = Object.fromEntries(new FormData(event.currentTarget))
        const request = await customAxios.post("products", {name: formData.name, precio: formData.precio, image: formData.image, categoria: selectedCategory}, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        if(request.status===201){
            toast.success("Producto creado exitosamente")
            setTimeout(()=>{
                location.reload()
            },2000)
            return
        }
        toast.error("Ocurrió un error intenta más tarde")
    }


    
    return (
    <BlurFade className="border text-card-foreground w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden" delay={0.2} inView>
        <div className='border text-card-foreground w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden'>
            <section >
                <section className='flex flex-col space-y-1.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6'>
                    Iniciar sesión
                </section>
                <form className='p-4' onSubmit={createProduct} >
                    <div className='w-full flex flex-col gap-3'>
                        <label htmlFor="name" className='flex flex-col w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 gap-2'>
                            Nombre del producto:
                            <input type="text" required name='name' id='name' className='p-2 border rounded' />
                        </label>
                        <label htmlFor="image" className='flex flex-col w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 gap-2'>
                            Url de la imagen:
                            <input type="text" required name='image' id='image' className='p-2 border rounded' />
                        </label>
                        <Select onValueChange={(value) => setSelectedCategory(value)} >
                            <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecciona una categoría" />
                            </SelectTrigger>
                            <SelectContent>
                            <SelectItem value="Hamburguesas">Hamburguesas</SelectItem>
                            <SelectItem value="Perros">Perros</SelectItem>
                            <SelectItem value="Bebidas">Bebidas</SelectItem>
                            <SelectItem value="Pizzas">Pizzas</SelectItem>
                            </SelectContent>
                        </Select>
                        <label htmlFor="precio" className='flex flex-col w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 gap-2'>
                            Precio:
                            <input type="number" required name='precio' id='precio' className='p-2 border rounded' />
                        </label>
                    </div>
                    <button type="submit" className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white'>
                        Crear producto
                    </button>
                </form>
            
            </section>
        </div>
        </BlurFade>
    )
}

export default FormCreateProduct