import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid'; 

const ProductoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 255,
  },
  image: {
    type: String,
    required: true,
    maxlength: 255,
  },
  precio: {
    type: Number,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
    maxlength: 255,
  },
  idproducto: {
    type: String,
    default: uuidv4, 
    unique: true, 
  },
});

const Producto = mongoose.model('Producto', ProductoSchema);
export default Producto;
