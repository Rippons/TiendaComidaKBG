import Header from '@/Header'
import Layout from '@/Layout'
import RegisterForm from './RegisterForm'

const Register = () => {
  return (
    <Layout>
        <Header/>
        <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8">
          <RegisterForm/>
        </main>
    </Layout>
  )
}

export default Register