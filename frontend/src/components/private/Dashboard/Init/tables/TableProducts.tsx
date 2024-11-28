import { useEffect, useState } from 'react'
import { DataTable } from './DataTable'
import { columns } from './Colums'
import { customAxios } from '@/axios/Axios'

export const TableProducts = () => {
    const [dataProducts,setDataProducts] = useState <Product[]> ([])
    
    const getDataProducts = async () => {
      try {
        const request = await customAxios.get("products", {
          headers: {
            "Content-Type": "application/json"
          }
        });
        if(request.status === 200){
          setDataProducts(request.data.data)
        }
        
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    useEffect(()=>{
        getDataProducts()
    },[])
    
  return (
    <div className=' px-4 w-full '>
      <DataTable columns={columns} data={dataProducts} />
    </div>
  )
}

export default TableProducts