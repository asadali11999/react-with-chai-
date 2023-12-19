import { useState } from "react"


function App() {
  const [color , setColor] = useState("olive")
  

  return (
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor : color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex  flex-wrap justify-center gap-3 shadow-lg  px-4 py-2 rounded-3xl">
        <button className=" outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor : "red"}}
        onClick={() => setColor("red")}>Red</button>
      </div>
      <div className="flex  flex-wrap justify-center gap-3 shadow-lg  px-4 py-2 rounded-3xl">
        <button className=" outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor : "green"}}
        onClick={() => setColor("green")}>green</button>
      </div><div className=" flex flex-wrap justify-center gap-3 shadow-lg  px-4 py-2 rounded-3xl">
        <button className=" outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor : "blue"}}onClick={() => setColor("blue")}>blue</button>
      </div><div className="flex  flex-wrap justify-center gap-3 shadow-lg  px-4 py-2 rounded-3xl">
        <button className=" outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor : "purple"}}onClick={() => setColor("purple")}>purple</button>
      </div><div className="flex  flex-wrap justify-center gap-3 shadow-lg  px-4 py-2 rounded-3xl">
        <button className=" outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor : "orange"}}onClick={() => setColor("orange")}>orange</button>
      </div><div className="flex  flex-wrap justify-center gap-3 shadow-lg  px-4 py-2 rounded-3xl">
        <button className=" outline-none px-4 py-1 rounded-full shadow-lg"
        style={{backgroundColor : "grey"}}onClick={() => setColor("grey")}>grey</button>
      </div>
    </div>


    </div>
  )
}

export default App
