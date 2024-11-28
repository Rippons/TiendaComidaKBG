import Layout from '@/Layout'
import HeaderAdmin from '../../HeaderAdmin'
import SideBar from '../Init/SideBar'
import FormCreateProduct from './FormCreateProduct'

const CreateProduct = () => {
  return (
    <Layout>
      <HeaderAdmin/>
      <main className="grid w-full h-full grid-cols-[300px,1fr]">
        <SideBar/>
        <section className="flex w-full items-center justify-center h-full ">
          <FormCreateProduct/>
        </section>
      </main>
    </Layout>
  )
}

export default CreateProduct