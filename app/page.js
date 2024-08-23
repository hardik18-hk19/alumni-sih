import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen font-sans">
      {/* Navbar */}
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

      {/* Hero Section */}
      <header className="relative h-screen overflow-hidden"style={{
    backgroundImage: "url('/folder/slide2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-extrabold mb-6">Stay Connected with Your Alumni Network</h1>
          <p className="text-xl mb-8">Empowering Alumni to Grow, Connect, and Contribute</p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold">
            Join Now
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 px-8 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { title: "Alumni Registration", description: "Easily join and stay connected with our alumni community.", icon: "user-plus" },
            { title: "Donation Portal", description: "Contribute towards various college initiatives and projects.", icon: "donate" },
            { title: "Networking Hub", description: "Connect with fellow alumni for professional and social growth.", icon: "users" },
            { title: "Job Opportunities", description: "Explore and post job opportunities within the alumni network.", icon: "briefcase" },
            { title: "Success Stories", description: "Celebrate alumni achievements and share your success.", icon: "trophy" },
            { title: "Events & Reunions", description: "Stay updated on upcoming events and reunions.", icon: "calendar-alt" },
          ].map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                <i className={`fas fa-${feature.icon} fa-3x`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success" className="py-16 px-8 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Success Stories</h2>
        <div className="space-y-8 max-w-5xl mx-auto">
          {[
            { name: "Rana", story: "After graduating, Rana founded a tech startup that revolutionized AI development." },
            { name: "Hardik", story: "Hardik has become a leader in renewable energy, making significant contributions to sustainability." },
            { name: "Satyam", story: "Satyam's work in education reform has impacted thousands of students nationwide." },
          ].map((story, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{story.name}</h3>
              <p className="text-gray-600">{story.story}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-8 bg-gray-900 bg-opacity-70 text-gray-400">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About Us</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          The Alumni Association platform is designed to foster a strong connection between alumni and their alma mater. Our goal is to provide
          a dynamic space where alumni can engage, contribute, and continue to grow professionally while supporting the next generation of students.
        </p>
      </section>

      {/* Footer */}
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
  );
}
