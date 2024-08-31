'use client'
import React, { useEffect } from 'react'

const Error = ({error,reset}:{
    error:Error;
    reset:()=>void;
}) => {

  return (
    <div className='h-[75vh] flex flex-col items-center justify-center'>
      <h2> Something went wrong</h2>
      <button className='bg-amber-600 p-2 rounded-md mt-2 font-bold' onClick={()=>reset()}>Please try again</button>
    </div>
  )
}

export default Error;