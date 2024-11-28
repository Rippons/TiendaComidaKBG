import LoginForm from "./LoginForm"
import Header from "../../Header"
import Layout from "../../Layout"

const Inicio = () => {
  return (
    <Layout>
        <Header/>
        <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8">
          <LoginForm/>
        </main>
    </Layout>
  )
}

export default Inicio