// File: ./components/BlogItem.jsx
import { assets } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function BlogItem({ image, description, title, category, id }) {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
      <Link href={`/blogs/${id}`}>
        <Image src={image} alt={title} width={400} height={400} className='border border-black' />
      </Link>
      <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-15px'>{category}</p>
      <div className='p-5'>
        <h5 className='mb-5 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
        <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
          Read more
          <Image src={assets.arrow} alt='arrow' className='ml-2' width={12} height={12} />
        </Link>
      </div>
    </div>
  );
}

export default BlogItem;
