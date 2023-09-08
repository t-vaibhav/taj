
import React from 'react'
import Image from 'next/image'
import Heading from './Heading'

export default function Bodynav() {
    return (
        <section className='max-w-[1180px] mx-auto px-5 text-white bg-black py-16'>
            <Heading title='Creating Content For' />
            <div className='  border border-orange-500 -rotate-2  rounded-[8px] mx-3 mt-5'>
                <div className='py-10 lg:px-20 lg:flex flex-row space-y-10 lg:space-y-0 justify-between no-tilt  items-center'>
                    <div className='text-black text-center flex justify-center items-center'>
                        <Image src={'/spur.png'} height={55} width={150} alt={'guess'} />
                    </div>
                    <div className='text-black text-center flex justify-center items-center'>
                        <Image src={'/navi.png'} height={55} width={180} alt={'guess'} />
                    </div>
                    <div className='text-black text-center flex justify-center items-center'>
                        <Image src={'/aism.png'} height={55} width={60} alt={'guess'} />
                    </div>
                    <div className='text-black text-center flex justify-center items-center'>
                        <Image src={'/fisdom.svg'} height={55} width={220} alt={'guess'} />
                    </div>

                </div>
            </div>
        </section>)
}

