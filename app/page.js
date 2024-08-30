"use client";
import { GlobalContext } from "@/context";
import { useContext } from "react";
import Aboutus from "./_components/Aboutus";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Feature from "./_components/feature";
import Footer from "./_components/footer";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);
  console.log(isAuthUser);
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
