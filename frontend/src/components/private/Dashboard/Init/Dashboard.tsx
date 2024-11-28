import HeaderAdmin from "../../HeaderAdmin"
import Layout from "@/Layout"
import SideBar from "./SideBar"
import TableProducts from "./tables/TableProducts"
import Charts from "./Charts/Charts"

const Dashboard = () => {
  return (
    <Layout>  
      <HeaderAdmin/>
      <main className="grid w-full h-full grid-cols-[300px,1fr]">
        <SideBar/>
        <section className="grid grid-rows-2 w-full h-full  ">
          <Charts/>
          <TableProducts/>
        </section>
      </main>
    </Layout>
  )
}

export default Dashboard