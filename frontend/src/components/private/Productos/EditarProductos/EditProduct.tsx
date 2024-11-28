import HeaderAdmin from '../../HeaderAdmin'
import SideBar from '../../Dashboard/Init/SideBar'
import Layout from '@/Layout'
import FormEditProdutc from '../FormEditProdutc'
const EditProduct = () => {
  return (
    <Layout>  
      <HeaderAdmin/>
      <main className="grid w-full h-full grid-cols-[300px,1fr]">
        <SideBar/>
        <section className="flex items-center justify-center  w-full h-full  ">
          <FormEditProdutc/>
        </section>
      </main>
    </Layout>
  )
}

export default EditProduct