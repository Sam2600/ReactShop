import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
     return (
          <header>
               <nav className='flex justify-between px-40 py-5 bg-zinc-600'>
                    <h1 className='text-2xl text-white'>My Personal.</h1>
                    <div className="space-x-5 text-white sticky top-0">
                         <Link to="/" className="text-xl hover:underline">Home</Link>
                         <Link to="createPost" className="text-xl hover:underline">Post</Link>
                    </div>
               </nav>
          </header>
     )
}

export default Header