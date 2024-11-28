import Producto from "../models/productos.js";


export async function getAllProducts(req,res) {

    try {
        const allProducts = await Producto.find()
        if(allProducts.length === 0){
            return res.status(204)
        }
        return res.status(200).json({
            status: "success",
            message: "todos los productos",
            data: allProducts
        })
        
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Error interno"
        })
    }

}


export async function getProduct(req,res) {
    const {id} = req.params
    try {
        const product = await Producto.findById(id)
        if(product){
            return res.status(200).json({
                status: "success",
                message: "todos los productos",
                data: product
            })
        }
        
        return res.status(204)
        
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "Error interno"
        })
    }

}


export async function editProduct(req, res) {
  const { id } = req.params;
  const { precio } = req.body;

  try {
    if (!precio && precio !== 0) {
      return res.status(400).json({
        status: "error",
        message: "El precio es requerido",
      });
    }

    const product = await Producto.findById(id);

    if (!product) {
      return res.status(404).json({
        status: "error",
        message: "Producto no encontrado",
      });
    }

    product.precio = precio;
    const updatedProduct = await product.save();

    return res.status(200).json({
      status: "success",
      message: "Producto editado correctamente",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error interno del servidor",
    });
  }
}


export async function createProduct(req, res) {
    try {
      const { name, image, precio, categoria } = req.body;
  
      if (!name || !image || !precio || !categoria) {
        return res.status(400).json({
          status: "error",
          message: "Todos los campos obligatorios deben ser proporcionados: name, image, precio, categoria",
        });
      }
  
      const nuevoProducto = new Producto({
        name,
        image,
        precio,
        categoria,
      });
  
      const productoGuardado = await nuevoProducto.save();
  
      return res.status(201).json({
        status: "success",
        message: "Producto registrado exitosamente",
        data: productoGuardado,
      });
    } catch (error) {  
      return res.status(500).json({
        status: "error",
        message: "Error interno del servidor",
      });
    }
  }
  