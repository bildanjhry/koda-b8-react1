import { useState } from 'react'

function Button({handleButtonAction, ops}){
  return (
    <>
      <button 
        className='w-16 h-16 flex justify-center items-center bg-[#90e0ef] 
        text-white cursor-pointer rounded-full shadow-md active:bg-[#ade8f4]'
        onClick={handleButtonAction}>
          <span className='text-4xl mb-2'>{ops}</span>
      </button>    
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const handleDecrement = () => count > 0 && setCount(count-1)
  const handleIncrement = () => setCount(count+1)

  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <div className='w-fit p-3 bg-[#caf0f8] rounded-full flex gap-12 
      h-fit shadow-lg justify-center items-center'>
        <Button handleButtonAction={handleDecrement} ops={'-'}/>
        <p className='text-4xl text-slate-900 font-semibold'>{count}</p>
        <Button handleButtonAction={handleIncrement} ops={'+'}/>
      </div>
    </div>
  )
}

export default App
