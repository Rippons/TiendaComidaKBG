import { LayoutDashboard, SquareChartGantt} from 'lucide-react'

const SideBar = () => {
  return (
    <div className='max-w-[300px] w-full h-full flex flex-col grow items-start justify-start bg-white '>
        <ul className=' w-full h-full flex flex-col grow items-start justify-start'>
            <li className='flex w-full'>
                <a href="/administracion" className='flex w-full items-center gap-2 justify-start p-2 text-zinc-900 transiton duration-300 hover:bg-blue-100 '> Inicio <LayoutDashboard /> </a>
            </li>
            <li className='flex w-full'>
                <a href="/productos" className='flex w-full items-center gap-2 justify-start p-2 text-zinc-900 transiton duration-300 hover:bg-blue-100'> Crear productos <SquareChartGantt /> </a>
            </li>
            
        </ul>

    </div>
  )
}

export default SideBar