import React from 'react'
import { Link as Anchor } from "react-router-dom"

export default function ErrorCard() {
  return (
    <div className="w-full min-h-screen flex justify-center flex-col items-center">
      <img src="../../img/cheemscrying.jpg" alt="" className='w-1/4 h-1/4'/>
    <div className="my-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold">Error</h1>
        <p className="text-2xl">City not found. Please try again.</p>
    </div>
    
    
</div>
)}