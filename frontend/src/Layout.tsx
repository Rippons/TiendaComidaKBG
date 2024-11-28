
const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className='w-full h-full min-h-screen grid grid-rows-[auto,1fr] bg-zinc-50 '>
        {children}
    </div>
  )
}

export default Layout