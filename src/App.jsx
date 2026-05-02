import React, { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0);
  
  return (
    <div className='min-h-screen min-w-screen bg-cyan-900'>
      <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='text-4xl font-semibold bg-lime-300 text-gray-500 py-2 px-4 rounded-2xl'>counter</h1>
        <h2 className='my-6 text-6xl text-white font-semibold'>{count}</h2>
       <div>
          <button className='font-semibold text-4xl bg-amber-500 mx-6 px-4 py-1 rounded-2xl cursor-pointer text-white' onClick={()=>setCount(count+1)}>+</button>
          <button className='font-semibold text-4xl bg-emerald-500 mx-6 px-4 py-1 rounded-2xl cursor-pointer text-white' onClick={()=>setCount(count-1)}>-</button>
          <button className='font-semibold text-4xl bg-fuchsia-800 mx-6 px-4 py-1 rounded-2xl cursor-pointer text-white' onClick={()=>setCount(0)}>0</button>
       </div>
      </div>
    </div>
  )
}

export default App