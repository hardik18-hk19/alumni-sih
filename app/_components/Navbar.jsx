import { Button } from "@/components/ui/button";
import React from "react";

function navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="text-xl font-semibold">
          <a href="#">Alumni Network</a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-blue-600">
              Features
            </a>
          </li>
          <li>
            <a href="#success" className="hover:text-blue-600">
              Success Stories
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600">
              About Us
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <Button>Get Started</Button>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
