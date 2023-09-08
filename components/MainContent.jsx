import React from 'react'
import Image from 'next/image'
import { stats, LookingFor, mainContent, ourServices } from '../utility/data'

const MainContent = () => {
    const renderMainContent = mainContent.map((content, index) => {
        return (
          <div key={index} id={content.id} className={`items-center p-2 mb-9 h-[54] lg:w-[90%] lg:mx-auto `}>
            {/* <h1 className='font-bold text-center md:text-left mb-2 text-2xl'>{content.header}</h1> */}
            <h3 className='mx-auto md:text-left md:px-16 text-center pt-10 text-3xl mb-10 md:text-4xl font-bold'>{content.header}</h3>
      
      
            <div className={`md:flex  ${content.class} items-center mt-4 sm:px-16 `}>
      
              <div className='lg:w-1/5 md:w-1/3 mb-4 md:mr-4 px-4 flex items-center justify-center m-auto'>
                <Image src={`/assets/MainContent/${content.coverImg}.png`} alt="" width={600} height={600} className='mb-4 mx-auto rounded-full w-48 md:w-full my-auto' />
              </div>
      
              <div className='text-center font-extralight px-2  md:text-left tracking-wide md:w-4/5  mx-auto md:text-lg lg:text-xl'>
                <div className="mb-4">{content.textLine1} </div>
                <div className="mb-4">{content.textLine1} </div>
              </div>
      
            </div>
          </div>
        )
      })

  return (
    <section>
          {renderMainContent}

        </section>
  )
}

export default MainContent