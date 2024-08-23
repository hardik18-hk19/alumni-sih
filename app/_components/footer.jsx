import React from 'react'

function footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="text-left">
            <h4 className="text-xl font-bold mb-4 text-white">Alumni Network</h4>
            <p className="text-gray-500">Stay connected with your alma mater and contribute to the community.</p>
          </div>
          {/* Column 2 */}
          <div className="text-left">
            <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#success" className="hover:text-white">Success Stories</a></li>
              <li><a href="#about" className="hover:text-white">About Us</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="text-left">
            <h4 className="text-xl font-bold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Events</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="text-left">
            <h4 className="text-xl font-bold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p>&copy; 2024 Government Engineering College Alumni Association. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default footer
