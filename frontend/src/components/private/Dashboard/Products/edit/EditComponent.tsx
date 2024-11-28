import HeaderAdmin from "@/components/private/HeaderAdmin"
import { Layout } from "lucide-react"
import SideBar from "../../Init/SideBar"

const EditComponent = () => {

  return (
    <Layout>
    <HeaderAdmin/>
    <main className="grid w-full h-full grid-cols-[300px,1fr]">
      <SideBar/>

      <section className="flex w-full items-center justify-center h-full ">
      </section>
    </main>
  </Layout>
  )
}

export default EditComponent