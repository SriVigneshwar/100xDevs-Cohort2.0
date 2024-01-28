import { useState } from 'react'


function App() {

  return (
    <>
      <div className='flex justify-around'>
        <div className='bg-red-500'>
          Viki
        </div>
        <div className='bg-green-500'>
          Thalapathy
        </div>
        <div className='bg-yellow-500'>
          Dhoni
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className='bg-red-500'>
          Viki
        </div>
        <div className='bg-green-500'>
          Thalapathy
        </div>
        <div className='bg-yellow-500'>
          Dhoni
        </div>
        <div className='bg-blue-500'>
          Ronin
        </div>
      </div>
    </>
  )
}

export default App
