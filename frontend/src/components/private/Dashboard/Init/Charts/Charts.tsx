import ChartRadar from "./ChartByCategory"

const Charts = () => {
  return (
    <div className="grid grid-cols-2 my-4 px-2">
      <ChartRadar/>
      <div className="bg-gradient-to-r flex items-center justify-center w-full h-full from-indigo-300 to-blue-300 text-white font-bold text-center rounded shadow">

        <h1>LLeva el control de tu inventario ✅</h1>

      </div>
    </div>
  )
}

export default Charts