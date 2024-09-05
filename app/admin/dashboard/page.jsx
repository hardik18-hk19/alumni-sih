"use client";

import { useState } from "react";
import Link from "next/link";

import {
  BarChart,
  Bell,
  BookOpen,
  Calendar,
  ChevronLeft,
  GraduationCap,
  Menu,
  Users,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-black text-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-20 px-6 border-b border-gray-800">
          <div className="flex items-center">
            <GraduationCap className="w-8 h-8 text-orange-500" />
            <span className="ml-2 text-2xl font-semibold">UniAdmin</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:text-orange-500"
            onClick={() => setIsSidebarOpen(false)}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
        </div>
        <nav className="mt-5">
          <Link
            href="#"
            className="flex items-center px-6 py-2 text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-colors duration-200"
          >
            <BarChart className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link
            href="#"
            className="flex items-center px-6 py-2 mt-5 text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-colors duration-200"
          >
            <Users className="w-5 h-5 mr-3" />
            Students
          </Link>
          <Link
            href="#"
            className="flex items-center px-6 py-2 mt-5 text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-colors duration-200"
          >
            <BookOpen className="w-5 h-5 mr-3" />
            Courses
          </Link>
          <Link
            href="#"
            className="flex items-center px-6 py-2 mt-5 text-gray-300 hover:bg-gray-800 hover:text-orange-500 transition-colors duration-200"
          >
            <Calendar className="w-5 h-5 mr-3" />
            Schedule
          </Link>
        </nav>
      </aside> */}

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-black"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
            <h1 className="ml-3 text-2xl font-semibold text-black">
              Dashboard
            </h1>
          </div>
          <div className="flex items-center">
            <Input type="search" placeholder="Search..." className="mr-4" />
            <Button
              variant="ghost"
              size="icon"
              className="text-black hover:text-orange-500"
            >
              <Bell className="w-5 h-5" />
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container px-6 py-8 mx-auto">
            <h2 className="text-2xl font-semibold text-black">Overview</h2>
            <div className="grid gap-6 mt-5 md:grid-cols-2 lg:grid-cols-4">
              <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 focus-within:ring-2 focus-within:ring-orange-500 bg-white border-l-4 border-orange-500">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium text-black">
                    Total Students
                  </CardTitle>
                  <Users className="w-4 h-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">15,231</div>
                  <p className="text-xs text-gray-600">+2.5% from last month</p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 focus-within:ring-2 focus-within:ring-orange-500 bg-white border-l-4 border-orange-500">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium text-black">
                    Active Courses
                  </CardTitle>
                  <BookOpen className="w-4 h-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">243</div>
                  <p className="text-xs text-gray-600">
                    +5 new courses this semester
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 focus-within:ring-2 focus-within:ring-orange-500 bg-white border-l-4 border-orange-500">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium text-black">
                    Average GPA
                  </CardTitle>
                  <BarChart className="w-4 h-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">3.42</div>
                  <p className="text-xs text-gray-600">
                    +0.1 from last semester
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 focus-within:ring-2 focus-within:ring-orange-500 bg-white border-l-4 border-orange-500">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium text-black">
                    Graduation Rate
                  </CardTitle>
                  <GraduationCap className="w-4 h-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">89%</div>
                  <p className="text-xs text-gray-600">+2% from last year</p>
                </CardContent>
              </Card>
            </div>

            {/* Additional sections can be added here */}
          </div>
        </main>
      </div>
    </div>
  );
}
