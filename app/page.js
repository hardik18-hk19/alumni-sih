import BlogList from "@/components/BlogList";
import Aboutus from "./_components/Aboutus";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Feature from "./_components/feature";
import Footer from "./_components/footer";
export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Feature />
      <div>
        <BlogList/>
      </div>
     

      {/* About Us Section */}
      <Aboutus />
      {/* Footer */}
      <Footer />
    </div>
  );
}
