import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[12%]  flex justify-center '>
      <form action="" className='bg-black p-5 w-1/2 grid grid-cols-12 rounded-lg shadow-lg shadow-black '>
        <input type="text" placeholder='What would you like to watch today?' className=' rounded-lg p-3 col-span-9  text-lg' />
        <button className=' bg-red-600 text-white ml-4 p-3 rounded-lg shadow-lg col-span-3 hover:bg-red-500 font-bold text-lg'>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar
