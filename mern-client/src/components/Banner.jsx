import React from 'react'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-200 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div>Left Side</div>
            {/* right side */}
            <div>Right Side</div>
        </div>
    </div>
  )
}

export default Banner