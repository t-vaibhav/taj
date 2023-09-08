import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Video from "./Video";
export default function Marketing() {
  return (
    <section className="max-w-[1180px] mx-auto py-10 space-y-16 sm:px-5 px-1">
      <div id="ig">
        {/* <h1 className='text-4xl px-2 font-extrabold font-kanit py-3'>Youtube Marketing</h1> */}
        <div>
          <div className="lg:flex flex-row px-2 justify-between ">
            <div className="lg:block hidden border border-orange-500  h-[576px]  w-full  rounded-[8px] tilt3 my-5 ">
              <div className=" no-tilt h-full w-full no-tilt3 border border-orange-500 flex items-center relative">
                <Image
                  src={"/reel_thumb.jpg"}
                  fill={true}
                  alt={"display picture"}
                  className=" h-full object-cover rounded-md w-full"
                />

                <a
                  href="https://www.instagram.com/reel/Cr3MMybJof3/?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFillPlayCircleFill className="play text-yellow-500/80  absolute text-6xl top-0 mx-auto my-auto bottom-0 left-0 right-0 duration-300 ease-in-out hover:scale-110 cursor-pointer" />
                </a>
                {/* <Video url="/videos/reel.mp4"/> */}
              </div>
            </div>

            <div className="lg:ml-16 px-1">
              {/* <Heading title="" /> */}
              <h1 className=" text-xl text-red-600 md:text-xl uppercase font-kanit ">
                If your business isn&#39;t on Instagram,{" "}
                <span className=" "> it should be.</span>
              </h1>
              <div className="py-7 space-y-2">
                <h1 className="text-5xl font-bold font-kanit">
                  If your business is on
                </h1>
                <h1 className="text-5xl font-bold font-kanit">
                  Instagram,{" "}
                  <span className="hero-text">engage your</span>
                </h1>
                <h1 className="text-5xl font-bold font-kanit">
                  {" "}
                  <span className="hero-text">followers daily.</span>
                </h1>
              </div>
              <p className="text-xl font-molengo">
                Create end-to-end content for your Instagram. We will create
                Reels, Carousels, Memes & Daily Stories for your page. Grow your
                Instagram page organically and build a community of followers
                that convert to paid customers.{" "}
              </p>

              <a href="#pricing">
                <button className="py-3 px-7 cta-btn text-black font-semibold my-10">
                  {" "}
                  Go Viral{" "}
                </button>
              </a>
            </div>

            <div className="lg:hidden border border-orange-500 h-[576px] w-[325px] mx-auto rounded-[8px] tilt3 my-5  relative">
              <div className="py-10 px-7 no-tilt h-[576px] w-[325px]  no-tilt3 border border-orange-500 relative">
                <Image
                  src={"/reel_thumb.jpg"}
                  fill={true}
                  alt={"display picture"}
                  className="object-cover rounded-md"
                />
                <a
                  href="https://www.instagram.com/reel/Cr3MMybJof3/?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFillPlayCircleFill className="text-yellow-500/80 absolute text-6xl top-0 mx-auto my-auto bottom-0 left-0 right-0 duration-300 ease-in-out hover:scale-110 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* https://www.instagram.com/reel/CqaZMzrjHUN/?utm_source=ig_embed&amp;utm_campaign=loading */}

      {/* <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/CqaZMzrjHUN/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/CqaZMzrjHUN/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/CqaZMzrjHUN/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Fisdom (@fisdom)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script> */}

      {/* <div id='yt'>
                <div>
                    <div className='lg:flex flex-row px-2 justify-between'>
                        <div className='sm:mr-16'>
                            <Heading title='If your business isn&#39;t on youtube, it should be.' />
                            <div className='py-7 space-y-2'>
                                <h1 className='text-5xl font-bold font-kanit'>If your business is on Youtube, <span className='text-yellow-500'>build A Community</span></h1>
                                
                            </div>
                            <p className='text-xl font-molengo px-1'>
                                Create both long and short videos for YouTube. We will take care of each aspect of creating an engaging YouTube video - Research, Scripting, Recording, Video Editing, Thumbnail & Management. Build a loyal community that transforms from subscribers to customers.
                            </p>
                            <a href="#contact"><button className='py-3 px-7 bg-[#FF351F] text-black font-semibold my-10'>Book A Call </button></a>

                        </div>
                        <div className='flex items-center'>
                            <div className=' border border-orange-500  sm:h-[325px] sm:w-[576px] w-[335px]  h-[192px] mx-auto rounded-[8px] tilt3 relative my-5'>
                                <div className='py-10 px-7 no-tilt sm:h-[325px] sm:w-[576px] h-[192px] w-[335px]  no-tilt3 border border-orange-500 '>
                  

                                    <iframe width="100%" height="100%"
                                        src="https://www.youtube.com/embed/AB-4AcR2-e4?autoplay=1">
                                    </iframe>
                                    <a href="https://www.youtube.com/@FisdomOfficial"><div className='sm:py-2 py-1 px-3 sm:px-7  text-black font-semibold sm:scale-125 border border-orange-500  tilt3  absolute top-3 -left-4 sm:top-10 sm:left-0 text-xs sm:text-sm'>
                                        <p>Fisdom</p>
                                        <p className='flex'>
                                            <Image className='mr-1' src={'/youtube.png'} width={15} height={15} alt={'youtube'} />
                                            50K+ Subscribers
                                        </p>
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

      {/* <div>
                <h1 className='text-4xl px-5 font-extrabold font-kanit py-3'>Instagram Marketing</h1>
                <div>
                    <div className='sm:flex flex-row px-4 justify-between'>
                        <div className='block sm:hidden border border-orange-500 -rotate-[4deg] h-[300px] w-[169px] mx-auto rounded-[8px] tilt2 my-5'>
                            <div className='py-10 px-7 no-tilt h-[300px] w-[169px]  no-tilt2 border border-orange-500'>
                                <Image src={'/display.png'} fill={true} alt={'display picture'} />
                            </div>
                        </div>

                        <div className='sm:mr-16'>
                            <h1 className='text-2xl font-kanit py-3'>
                                If You Business Isn&#39;t On Youtube, It Should Be. If Your Business Is On Youtube, Build A Community
                            </h1>
                            <p className='text-xl font-molengo'>
                                Create both long and short videos for YouTube. We will take care of each aspect of creating an engaging YouTube video - Research, Scripting, Recording, Video Editing, Thumbnail & Management. Build a loyal community that transforms from subscribers to customers.
                            </p>
                        </div>


                        <div className='hidden sm:block border border-orange-500 -rotate-[4deg] h-[300px] w-[169px] mx-auto rounded-[8px] tilt2 my-5'>
                            <div className='py-10 px-7 no-tilt h-[300px] w-[169px]  no-tilt2 border border-orange-500'>
                                <Image src={'/display.png'} fill={true} alt={'display picture'} />
                                add video here
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}
    </section>
  );
}
