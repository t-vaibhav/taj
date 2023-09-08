
import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (

        <footer className='pb-3'>
            <div className='md:h-24 h-16 footer flex items-center justify-center'>
                <div className='flex space-x-20'>
                    <a href="https://www.linkedin.com/company/growth-rocket-india" target='blank'><Image src={'/linkedin.png'} height={40} width={40} alt={'Whatsapp'} className='h-10 w-10' /></a>
                    <a href="https://www.youtube.com/@AyushmanPandita" target='blank'><Image src={'/youtube.png'} height={40} width={40} alt={'Whatsapp'} className='h-10 w-10' /></a>
                    <a href="https://www.instagram.com/growthrocket.in/" target='blank'><Image src={'/instagram.png'} height={40} width={40} alt={'Whatsapp'} className='h-10 w-10' /></a>
                </div>
            </div>
            <p className='text-center py-3'>Growth Rocket &#169; 2023. All Rights Reserved.</p>
        </footer>
    )

}

