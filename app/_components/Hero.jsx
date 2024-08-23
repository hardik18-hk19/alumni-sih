import { Button } from "@/components/ui/button";
import React from "react";

function Hero() {
  return (
    <div>
      <header
        className="relative h-screen overflow-hidden"
        style={{
          backgroundImage: "url('/folder/slide2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-extrabold mb-6">
            Stay Connected with Your Alumni Network
          </h1>
          <p className="text-xl mb-8">
            Empowering Alumni to Grow, Connect, and Contribute
          </p>
          <Button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-sm text-white font-semibold">
            Join Now
          </Button>
        </div>
      </header>
    </div>
  );
}

export default Hero;
