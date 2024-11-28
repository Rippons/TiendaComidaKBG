import Inicio from '@/components/Inicio/Inicio'
import Dashboard from '@/components/private/Dashboard/Init/Dashboard'
import CreateProduct from '@/components/private/Dashboard/Products/CreateProduct'
import EditProduct from '@/components/private/Productos/EditarProductos/EditProduct'
import Register from '@/components/Register/Register'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Toaster} from 'sonner'
const Routing = () => {
  return (
    <BrowserRouter>
        <Routes  >
            <Route path='/' element={<Inicio/>} />
            <Route path='/registrar' element={<Register/>} />
            <Route path='/administracion' element={<Dashboard/>} />
            <Route path='/productos' element={<CreateProduct/>} />
            <Route path='/editar/:id' element={<EditProduct/>} />
        </Routes>
        <Toaster richColors />
    </BrowserRouter>
 )
}

export default Routing