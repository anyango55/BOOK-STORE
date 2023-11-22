import React from 'react'
import BannerCard from '../landing/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-200 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>BUY AND SELL YOUR BOOK  
                <span className='text-blue-700'>
                   for the Best Prices
                </span>
                </h2>
                <p className='md:w-4/5 '>Lorem ipsum dolor sit amet consectetur, adipisicing 
                    elit. Illo dolore, natus vero facilis soluta quidem 
                    sapiente corporis, perspiciatis est quisquam, beatae 
                    dolorum totam error odio repellendus. Facilis ducimus 
                    obcaecati blanditiis.
                </p>
                <div>
                    <input 
                        type='search' 
                        name='search' 
                        id='search' 
                        placeholder='Search a book' 
                        className='py-2 px-2 rounded-s-sm outline-none'/>
                        <button className='bg-blue-700 text-white py-2 px-6 rounded-sm font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>
            {/* right side */}
            <div>
                <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner