/* eslint-disable react-hooks/exhaustive-deps */
import { customAxios } from "@/axios/Axios";
import BlurFade from "@/components/ui/blur-fade";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { PDF } from "../pdf/Pdf";
import { FileDown } from "lucide-react";

const FormEditProdutc = () => {
    const {id} = useParams()
    const [product, setProduct] = useState <Product> ()
    async function getProduct() {
        const request = await customAxios.get(`products/${id}`,{headers:{"Content-Type": "application/json"}})
        if(request.status===200){
            setProduct(request.data.data)
        }
    }

    async function editProduct(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const dataForm = Object.fromEntries(new FormData(event.currentTarget))
        const request = await customAxios.put(`products/${id}`,{ precio: dataForm.precio})
        if(request.status === 200){
            toast.success("Producto editado correctamente")
            setTimeout(()=>{
                location.reload()
            },1000)
        }
    }

    useEffect(()=>{
        getProduct()
    },[])

    return (
        <BlurFade className="border flex items-center py-2 bg-white gap-4 justify-evenly mx-4  text-card-foreground w-full   shadow-lg rounded-lg overflow-hidden" delay={0.2} inView>
            <div  className="border bg-white shadow-sm  rounded p-4">
                <div className="flex items-center justify-center gap-4">
                    <h1 className="text-blue-500"> {product?.name} </h1>
                </div>
                <div className="flex items-center justify-center">
                    <img src={product?.image} alt={product?.name} className="aspect-square object-cover max-w-56 rounded" />
                </div>
                <div>
                    <h1>$ {product?.precio} </h1>
                    <h1>Categoría: {product?.categoria} </h1>
                </div>
                <div>
                    <p>Producto en formato pdf</p>
                    {product &&
                    <PDFDownloadLink document={<PDF producto={product} />} >
                      <button className="flex w-full md:max-w-40 items-center justify-center border p-1 rounded">
                        Descargar <FileDown />
                      </button>
                      </PDFDownloadLink>
                    }
                </div>
                    
            </div>
            <div className='border text-card-foreground w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden'>
            <section >
                <section className='flex flex-col space-y-1.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6'>
                    Iniciar sesión
                </section>
                <form className='p-4' onSubmit={editProduct} >
                    <div className='w-full flex flex-col gap-3'>
                        <label htmlFor="precio" className='flex flex-col w-full text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 gap-2'>
                            Precio:
                            <input type="number" defaultValue={product?.precio} required name='precio' id='precio' className='p-2 border rounded' />
                        </label>
                    </div>
                    <button type="submit" className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white'>
                        Editar producto
                    </button>
                </form>
            
            </section>
        </div>
        </BlurFade>
    )
}

export default FormEditProdutc