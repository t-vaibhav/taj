            {/* <div className='flex flex-col w-full p-2 sm:w-3/4 lg:pt-10'>
              <div className="text-white font-bold sm:text-4xl md:text-5xl sm:leading-[1.7] md:leading-[1.5] sm:tracking-wide  lg:text-6xl 2xl:text-7xl 2xl:font-medium 2xl:leading-[1.1] lg:leading-[1.4] w-[80%] text-3xl ">
                Build customer loyalty with <span className='text-[#FF5D73] font-bold'>Technology</span> & <span className='text-[#FF5D73] font-extrabold'>Creativity</span>
              </div>
              <button className='bg-[#FFC727] lg:text-2xl px-4 sm:text-xl lg:mt-7 lg:py-4  text-gray-900 sm:px-5 rounded-sm w-fit py-2  mt-4 font-semibold'>Get Started</button>
            </div> */}



            {/* START */}
            {/* edited by vaibhav, START */}

            {/* 
            <div className='flex flex-col w-full p-2 sm:w-3/4 lg:pt-10'>
              <div className="text-white font-bold lg:text-4xl">
                <h1>Social Media Content To</h1>
                <TypeAnimation
                  sequence={[
                    // Same String at the start will only be typed once, initially
                    '1. hello world',
                    1000,
                    '2. Engage Viewers',
                    1000,
                    '3. Bring Customers',
                    1000,
                  ]}
                  speed={50}
                  style={{ fontSize: '1rem' }}
                  repeat={Infinity}
                />
              </div>
              <button className='bg-[#FFC727] lg:text-2xl px-4 sm:text-xl lg:mt-7 lg:py-4  text-gray-900 sm:px-5 rounded-sm w-fit py-2  mt-4 font-semibold'>Get Started</button>
            </div> */}



                      {/* SECTION 2 VIEWS PLUS WATCHTIME  starts*/}


          {/* <section className="bg-white text-black py-6 md:py-10"> */}
          {/* <div className="grid md:grid-cols-3 gap-y-5 md:w-4/5 lg:w-10/12 xl:w-2/3 mx-auto  grid-cols-2  justify-center ">
            {renderStats}
          </div> */}
            
            {/* SECTION 2 VIEWS PLUS WATCHTIME  ends*/}


        {/* I AM LOOKING FOR  starts*/}


        {/* <section className=' py-6 md:py-12'>
          <h3 className='px-12 pt-10 text-3xl md:text-4xl font-bold'>I am looking for:</h3>
          <div className="grid  md:grid-cols-3  px-12 py-8 text-black  md:text-lg font-semibold text-sm gap-y-6 justify-center mx-auto items-center ">
            {LookingFor.map((data, index) => {
              return (
                <div key={index} className=" flex justify-center">
                  <Link href={data.link} className='bg-primary-pink md:p-4 p-2  text-center cursor-pointer rounded-sm w-[300px] md:w-[90%] '>
                    <button className=''>{data.text}
                    </button>
                  </Link>
                </div>
              )
            })}


          </div>
        </section> */}


        {/* I AM LOOKING FOR  ends*/}


        {/* OUR SERVICES  starts*/}


        {/* <section className=' md:pt-6 md:pb-12 '>
          <h3 className='px-12 pt-10 text-3xl md:text-4xl font-bold'>Our Services:</h3>
          <div className='grid  grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 justify-between p-12 text-xs md:text-lg font-bold '>
            {renderOurServices}
          </div>

        </section> */}


        {/* OUR SERVICES  ends*/}



        {/* pricing section starts */}
        {/* for phome view : slider*/}

        {/*         
        <section className=' md:pt-6 md:pb-12 py-5'>
          <h3 className='px-12 pt-10 text-3xl md:text-4xl font-bold'>Our Services:</h3>

          <div className='md:hidden '>
            <Swiper

              spaceBetween={20}
              slidesPerView={1.6}
              freeMode={true}
              // loop={true}
              grabCursor={true}


              // loop={true}
              // centeredSlides= {true}
              modules={[FreeMode]}







              className='md:w-[90vw] w-[90%] text-black  grid items-center  '
            >
              <SwiperSlide className=" ml-8 -mr-8    my-5  flex flex-col justify-center items-center max-w-[30%]">
                <div className='bg-gray-100 px-4 py-7 sm:px-7  rounded-xl w-full  flex flex-col gap-4 '>

                  <div className='grid gap-2'>
                    <h3 className='text-base'>Content Creation</h3>
                    <h2 className='text-2xl font-extrabold'>First</h2>
                    <p className='text-sm text-gray-600 mb-2 '>Best for Content Creators </p>
                  </div>
                  <div className='flex flex-col gap-2 text-xs sm:text-sm'>
                    <div className='flex gap-2'>
                      <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                      <p className=''>Youtube Content Marketing</p>
                    </div>

                    <div className='flex gap-2'>
                      <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                      <p className=''>Instagram Content Marketing</p>
                    </div>

                    <div className='flex gap-2'>
                      <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                      <p className=''>Full Video Creation</p>
                    </div>

                    <div className='flex gap-2'>
                      <img src="https://img.icons8.com/color/96/null/cancel--v1.png" className='w-6 h-6' />
                      <p className=''>Full Video Creation</p>
                    </div>

                    <div className='flex gap-2'>
                      <img src="https://img.icons8.com/color/96/null/cancel--v1.png" className='w-6 h-6' />
                      <p className=''>Full Video Creation</p>
                    </div>

                    <div className='flex gap-2'>
                      <img src="https://img.icons8.com/color/96/null/cancel--v1.png" className='w-6 h-6' />
                      <p className=''>Full Video Creation</p>
                    </div>

                  </div>

                  <button className='bg-primary-pink  rounded-xl px-5 py-2 text-white font-extrabold'>Get Started <img className='w-5 inline text-white' src="/assets/right-arrow.svg" /></button>


                </div>
              </SwiperSlide>


              <SwiperSlide className="  py-4 my-5  flex flex-col justify-center items-center max-w-[30%]">
                <div className='bg-gray-100 px-4 sm:px-7 py-7 border-primary-yellow  border-[6px] rounded-xl  w-full   flex flex-col gap-5 '>

                  <div className='grid gap-2'>
                    <h3 className='text-base'>New Age Tech Marketing</h3>
                    <h2 className='text-2xl font-extrabold'>Second</h2>
                    <p className='text-sm text-gray-600 mb-2'>Best for Content Creators </p>
                  </div>
                  <div className='flex flex-col gap-3 text-xs'>
                    <div className='flex gap-2'>
                      <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                      <p className=''>Youtube Content Marketing</p>
                    </div>

                    <div className='flex gap-2'>
                      <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                      <p className=''>Instagram Content Marketing</p>
                    </div>

                    <div className='flex gap-2'>
                      <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                      <p className=''>Full Video Creation</p>
                    </div>

                    <div className='flex gap-2'>
                      <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                      <p className=''>Full Video Creation</p>
                    </div>

                    <div className='flex gap-2'>
                      <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                      <p className=''>Full Video Creation</p>
                    </div>

                    <div className='flex gap-2'>
                      <img src="https://img.icons8.com/color/96/null/cancel--v1.png" className='w-6 h-6' />
                      <p className=''>Full Video Creation</p>
                    </div>

                  </div>

                  <button className='bg-primary-pink rounded-2xl px-5 py-2 text-white font-extrabold'>Get Started <img className='w-5 inline text-white' src="/assets/right-arrow.svg" /></button>


                </div>
              </SwiperSlide>

              <SwiperSlide className="     my-5  flex flex-col justify-center items-center max-w-[30%]">
                <div className='bg-gray-100 px-4 py-7 sm:px-7  rounded-xl w-full  flex flex-col gap-4 '>

                  <div className='grid gap-2'>
                    <h3 className='text-base'>Superhuman Creaors</h3>
                    <h2 className='text-2xl font-extrabold'>Third</h2>
                    <p className='text-sm text-gray-600 mb-2 '>Best for Pro Editors</p>
                  </div>
                  <div className='flex flex-col gap-2 text-xs sm:text-sm'>
                    <div className='flex gap-2'>
                      <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                      <p className=''>Youtube Content Marketing</p>
                    </div>

                    <div className='flex gap-2'>
                      <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                      <p className=''>Instagram Content Marketing</p>
                    </div>

                    <div className='flex gap-2'>
                      <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                      <p className=''>Full Video Creation</p>
                    </div>

                    <div className='flex gap-2'>
                      <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                      <p className=''>Full Video Creation</p>
                    </div>

                    <div className='flex gap-2'>
                      <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                      <p className=''>Full Video Creation</p>
                    </div>

                    <div className='flex gap-2'>
                      <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                      <p className=''>Full Video Creation</p>
                    </div>

                  </div>

                  <button className='bg-primary-pink  rounded-xl px-5 py-2 text-white font-extrabold'>Get Started <img className='w-5 inline text-white' src="/assets/right-arrow.svg" /></button>


                </div>
              </SwiperSlide>



              <SwiperSlide className='w-[4vw] '><div className='w-[4vw] '></div></SwiperSlide>









            </Swiper>
          </div>


          {/* for desktop view : slider  */}
        {/* <div className='px-10 gap-x-4   hidden lg:px-24 lg:gap-x-7 xl:px-36  text-black  md:grid grid-cols-3 items-center justify-center  '>


            <div className="my-5">
              <div className='bg-gray-100 px-4 py-7 sm:px-7  rounded-xl w-full  flex flex-col gap-6 '>

                <div className='grid gap-3'>
                  <h3 className='text-lg'>Content Creation</h3>
                  <h2 className='text-3xl font-extrabold'>First</h2>
                  <p className=' text-gray-600 mb-2 '>Best for Content Creators </p>
                </div>
                <div className='flex flex-col gap-4 '>
                  <div className='flex gap-2'>
                    <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                    <p className=''>Youtube Content Marketing</p>
                  </div>

                  <div className='flex gap-2'>
                    <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                    <p className=''>Instagram Content Marketing</p>
                  </div>

                  <div className='flex gap-2'>
                    <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                    <p className=''>Full Video Creation</p>
                  </div>

                  <div className='flex gap-2'>
                    <img src="https://img.icons8.com/color/96/null/cancel--v1.png" className='w-6 h-6' />
                    <p className=''>Full Video Creation</p>
                  </div>

                  <div className='flex gap-2'>
                    <img src="https://img.icons8.com/color/96/null/cancel--v1.png" className='w-6 h-6' />
                    <p className=''>Full Video Creation</p>
                  </div>

                  <div className='flex gap-2'>
                    <img src="https://img.icons8.com/color/96/null/cancel--v1.png" className='w-6 h-6' />
                    <p className=''>Full Video Creation</p>
                  </div>

                </div>

                <button className='bg-primary-pink  rounded-xl px-5 py-2 text-white font-extrabold '>Get Started <img className='w-5 inline text-white' src="/assets/right-arrow.svg" /></button>


              </div>
            </div>


            <div className="py-6 my-5 ">
              <div className='bg-gray-100 px-4 sm:px-7 py-7 border-primary-yellow  border-[6px] rounded-xl  w-full   flex flex-col gap-7 '>

                <div className='grid gap-3'>
                  <h3 className='text-lg'>New Age Tech Marketing</h3>
                  <h2 className='text-3xl font-extrabold'>Second</h2>
                  <p className=' text-gray-600 mb-2'>Best for Content Creators </p>
                </div>
                <div className='flex flex-col gap-5 '>
                  <div className='flex gap-2'>
                    <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                    <p className=''>Youtube Content Marketing</p>
                  </div>

                  <div className='flex gap-2'>
                    <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                    <p className=''>Instagram Content Marketing</p>
                  </div>

                  <div className='flex gap-2'>
                    <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                    <p className=''>Full Video Creation</p>
                  </div>

                  <div className='flex gap-2'>
                    <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                    <p className=''>Full Video Creation</p>
                  </div>

                  <div className='flex gap-2'>
                    <img src="https://img.icons8.com/color/96/null/cancel--v1.png" className='w-6 h-6' />
                    <p className=''>Full Video Creation</p>
                  </div>

                  <div className='flex gap-2'>
                    <img src="https://img.icons8.com/color/96/null/cancel--v1.png" className='w-6 h-6' />
                    <p className=''>Full Video Creation</p>
                  </div>

                </div>


                <button className='bg-primary-pink rounded-2xl px-5 py-2 text-white font-extrabold '>Get Started <img className='w-5 inline text-white' src="/assets/right-arrow.svg" /></button>



              </div>
            </div>

            <div className="my-5">
              <div className='bg-gray-100 px-4 py-7 sm:px-7  rounded-xl w-full  flex flex-col gap-6 '>

                <div className='grid gap-3'>
                  <h3 className='text-lg'>Master Video Editing</h3>
                  <h2 className='text-3xl font-extrabold'>Third</h2>
                  <p className=' text-gray-600 mb-2 '>Best for Pros </p>

                </div>
                <div className='flex flex-col gap-4 '>
                  <div className='flex gap-2'>
                    <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                    <p className=''>Youtube Content Marketing</p>
                  </div>

                  <div className='flex gap-2'>
                    <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                    <p className=''>Instagram Content Marketing</p>
                  </div>

                  <div className='flex gap-2'>
                    <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                    <p className=''>Full Video Creation</p>
                  </div>

                  <div className='flex gap-2'>
                    <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                    <p className=''>Full Video Creation</p>
                  </div>

                  <div className='flex gap-2'>
                    <img src="https://img.icons8.com/color/96/null/checked--v1.png" className='w-6 h-6' />
                    <p className=''>Full Video Creation</p>
                  </div>

                  <div className='flex gap-2'>

                    <img src="https://img.icons8.com/color/96/null/cancel--v1.png" className='w-6 h-6' />
                    <p className=''>Full Video Creation</p>
                  </div>

                </div>

                <button className='bg-primary-pink rounded-2xl px-2 py-2 text-white font-extrabold'>Get Started <img className='w-5 inline text-white' src="/assets/right-arrow.svg" alt='arrow' /></button>


              </div>
            </div>














          </div>
        </section> */}
        {/* pricing section ends */}

            

        {/* main content starts */}
        {/* <MainContent /> */}



        {/* team slider starts */}


        {/* <section className='md:pt-6 md:pb-32 py-8 pb-24'>
          <h3 className='px-12 pb-10 text-3xl md:text-4xl font-bold'>Our Team:</h3>
          <TeamSlider />
        </section> */}


        {/* team slider ends */}


        {/* footer starts */}
        {/* <footer className='bg-gray-100 pt-10 flex-col flex justify-center items-center gap-9 md:gap-10'>
          <Image
            src={"/assets/growth.svg"}
            width={60}
            height={60}
            alt={"twitter"}
            className=" w-64 "
          />
          <div className="grid w-[250px] md:w-[300px] grid-cols-5">
            <Image
              src={"/assets/twitter.svg"}
              width={60}
              height={60}
              alt={"twitter"}
              className=" md:w-8 md:h-8 w-7 h-7 "
            />
            <Image
              src={"/assets/insta.svg"}
              width={60}
              height={60}
              alt={"insta"}
              className=" md:w-8 md:h-8 w-7 h-7 "
            />
            <Image
              src={"/assets/youtube.svg"}
              width={60}
              height={60}
              alt={"youtube"}
              className=" md:w-8 md:h-8 w-7 h-7 "
            />
            <Image
              src={"/assets/mail.svg"}
              width={60}
              height={60}
              alt={"mail"}
              className=" md:w-8 md:h-8 w-7 h-7 "
            />
            <Image
              src={"/assets/phone.svg"}
              width={60}
              height={60}
              alt={"phone"}
              className=" md:w-8 md:h-8 w-7 h-7 "
            />

          </div>

          <div className='h-[10vh] bg-primary-pink w-full'></div>
        </footer> */}
