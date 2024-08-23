import React from 'react'

function navbar() {
  return (
    <div>
        <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="text-xl font-semibold">
          <a href="#">Alumni Network</a>
        </div>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#features" className="hover:text-blue-600">Features</a></li>
          <li><a href="#success" className="hover:text-blue-600">Success Stories</a></li>
          <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
        </ul>
        <div className="flex items-center space-x-4">
          <a href="#" className="px-4 py-2 bg-black hover:bg-blue-700 rounded-full text-white font-semibold">Login</a>
        </div>
      </nav>
      
    </div>
  )
}

export default navbar
