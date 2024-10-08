"use client"
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AdminDashboard from '../admin/dashboard/page'
import { House } from 'lucide-react'


const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>

      {/* Alumni Network Container */}
      <div className='w-52 sm:w-64 px-2 sm:pl-14 py-6 border border-black'>
        <div className="text-xl font-semibold mr-8 whitespace-nowrap overflow-hidden text-ellipsis">
          <Link href='/'>
         <h2>Alumni Network</h2>
          </Link>
        </div>
      </div>

      {/* Add Blogs Container */}
      <div className='h-[100vh] relative py-12 border border-black flex flex-col gap-4'>
        <Link href='/admin/addProduct' className='w-full flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white' style={{ boxShadow: '-5px 5px 0px #000000' }}>
          <Image src={assets.add_icon} alt='Add Icon' width={35} height={35}/>
          <p>Add blogs</p>
       </Link>
        
       <Link href='/admin/dashboard'className='w-full flex items-center border border-black gap-3 font-medium px-3 py-3 bg-white pl--1' style={{ boxShadow: '-5px 5px 0px #000000' }}>
      <House className=' pl-1'/>
          <p>Dashboard</p>
       </Link>
        {/* <Link href='/admin/blogList' className='mt-5 w-full flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white' style={{ boxShadow: '-5px 5px 0px #000000' }}>
          <Image src={assets.blog_icon} alt='Blog Icon' width={40} height={40}/>
          <p>Blog List</p>
        </Link>
        <Link href='/admin/subscription' className='mt-5 w-full flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white' style={{ boxShadow: '-5px 5px 0px #000000' }}>
          <Image src={assets.email_icon} alt='Email Icon' width={40} height={40}/>
          <p>Subscription</p>
        </Link> */}
      </div>

    </div>
  )
}

export default Sidebar
