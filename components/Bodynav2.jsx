
import React from 'react'
import Heading from './Heading'

export default function Bodynav2() {
    return (
        <section className='max-w-[1180px] mx-auto px-5 text-white bg-black py-16'>

            <Heading title='Number that speak louder than words' />

            <div className=' border border-orange-500 -rotate-2 mt-8  rounded-[8px] mx-3'>
                <div className='py-10 lg:px-40 lg:flex flex-row space-y-10 lg:space-y-0 justify-between no-tilt  items-center'>
                    <div className='text-black text-center'>
                        <h1 className='text-4xl font-extrabold font-kanit'>25 Million+</h1>
                        <p className='text-2xl font-semibold font-kanit'>Views</p>
                    </div>
                    <div className='text-black text-center'>
                        <h1 className='text-4xl font-extrabold font-kanit'>200,000 Hours+</h1>
                        <p className='text-2xl font-semibold font-kanit'>Watch Time</p>
                    </div>
                    <div className='text-black text-center'>
                        <h1 className='text-4xl font-extrabold font-kanit'>10 Million+</h1>
                        <p className='text-2xl font-semibold font-kanit'>Audience</p>
                    </div>

                </div>
            </div>
        </section >
    )
}

