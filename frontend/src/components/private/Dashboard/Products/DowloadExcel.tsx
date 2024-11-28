/* eslint-disable react-refresh/only-export-components */
import { customAxios } from "@/axios/Axios";
import xlsx, { IContent, IJsonSheet } from "json-as-xlsx";

export function xls(data: IContent[]) {
    const columns: IJsonSheet[] = [
        {
          sheet: "Productos",
          columns: [
            { label: "Product ID", value: "_id" }, 
            { label: "Name", value: "name" }, 
            { label: "Price", value: "precio" }, 
            { label: "Category", value: "categoria" }, 
            { label: "Image URL", value: "image" }, 
            { label: "Product Code", value: "idProducto" }, 
          ],
          content: data, 
        },
      ];
    
      const settings = {
        fileName: "Reporte_Productos", 
        extraLength: 3, 
        writeOptions: {}, 
      };
    
      xlsx(columns, settings);
  }
  
  export const DownloadExcel = () => {
    
    const getDataProducts = async () => {
      try {
        const request = await customAxios.get("products", {
          headers: {
            "Content-Type": "application/json"
          }
        });
        if(request.status === 200){
          xls(request.data.data)
        }
        
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
  
    return (
      <button onClick={getDataProducts} className="bg-green-500 max-w-[200px] p-2 rounded w-full hover:bg-green-600 text-white"  >
        Descargar Excel
      </button>
    );
  };