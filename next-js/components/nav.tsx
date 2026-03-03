import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className='fixed bottom-10 left-1/2 -translate-x-1/2 space-x-4'>
      <Link 
      className='px-4 py-2 bg-black'
      href={"/"}>Home</Link>
      <Link 

      className='px-4 py-2 bg-black'
      href={"/colony"}>Colony</Link>

      <Link 
      className='px-4 py-2 bg-black'
      href={"/gateway"}>Gateway</Link>

      <Link 
      className='px-4 py-2 bg-black'
      href={"/station"}>Station</Link>
    </div>
  )
}
