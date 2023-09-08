import React from 'react'
import Heading from './Heading'

export default function Growon() {
    return (
        <section id='growth' className='max-w-[1220px] mx-auto  px-8 lg:flex flex-row lg:justify-between justify-center'>
            <div className='lg:w-4/5'>
                <h6 className='text-2xl font-bold text-white font-kanit'>We create content that is a</h6>
                <div className='hero-text space-y-1'>
                    <h1 className='text-5xl font-kanit font-bold text-transparent'>blend of Science</h1>
                    <h1 className='text-5xl font-kanit font-bold text-transparent'>& Creativity</h1>
                </div>
                <p className='space-y-10 leading-6 text-xl font-medium font-molengo pt-3  '>
                    Data drives everything we do. Data that shows how to hack the algorithm. Our content strategy is backed by hard data analysis to ensure your content resonates with your audience, builds brand loyalty and drives growth on social media.
                </p>
            </div>
            {/* <div className='flex justify-start'>
                <div className='lg:w-2/5 flex items-center '>
                    <div>
                        <div className='pt-5 lg:pt-0'>
                            <Heading title='I WANT TO GROW ON' />
                        </div>


                        <div className='sm:space-x-20 lg:space-x-10  py-2 sm:flex flex-row justify-center sm:space-y-0 space-y-5'>
                            <div className='flex justify-start'>
                                <a href="#yt"><button className='py-3 px-10 bg-[#FFB701] text-black font-semibold'>YouTube</button></a>
                            </div>

                            <div className='flex justify-start'>
                                <a href="#ig"><button className='py-3 px-10 bg-[#FF351F] text-black font-semibold'>Instagram</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

