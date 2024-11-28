import mongoose from 'mongoose';

const AdministradorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    maxlength: 255,
  },
  name: {
    type: String,
    required: true,
    maxlength: 255,
  },
});

const Administrador = mongoose.model('Administrador', AdministradorSchema);
export default Administrador;
