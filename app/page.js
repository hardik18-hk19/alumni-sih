import Image from "next/image";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Feature from "./_components/feature";
import Aboutus from "./_components/Aboutus";
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

      {/* About Us Section */}
      <Aboutus />
      {/* Footer */}
      <Footer />
    </div>
  );
}
