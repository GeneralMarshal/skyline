import SlideShow from './SlideShow';
import { Parallax} from 'react-parallax';
import Footer from './Footer';
export default function LandingPage(){
    return(
        <>
            <main>
            <Parallax strength={300}
            bgImage="/images/street view 1.png" 
            bgImageStyle={{objectFit: "cover", minWidth: "100%", minHeight: "100%", height: "auto"}}
            >
                <div className="relative  flex w-full h-[100vh] overflow-hidden ">

                    <img 
                        className=" absolute w-[60%] z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] " 
                        src="/icons/Investor's narrative 1.svg" 
                        alt="investors narrative" 
                    />
                </div>
            </Parallax>

             <div className=" w-full px-10 py-10 h-[50vh] flex flex-col justify-center">
                 <h1 className=" w-[70%] text-[64px] font-[400] tracking-wider">
                     THE TALLEST RESIDENTIAL BUILDING IN IKEJA GRA
                 </h1>
             </div>

            <div className="h-[100vh] w-full flex justify-center ">
                <div className={` gap-8 p-12 w-[60%] h-[90%] flex`} >
                    <span className=" flex-[65%] overflow-hidden">
                        <img  className=" object-cover object-center min-h-full min-w-full " src="/images/TA penthouse 2 dry kitchen dining 1.png" alt="" />
                    </span>
                    <span className=" flex-[35%] h-[60%]">
                    <img  className=" object-cover object-center min-h-full min-w-full " src="/images/Picture → 1729154318-home-2.jpg.png" alt="" />
                    </span>
                </div>
            </div>

            <Parallax strength={600}
                bgImage="/images/unsplash_buGdVvTxJ38.png" 
                bgImageStyle={{objectFit: "cover", minWidth: "100%", minHeight: "100%", height: "auto"}}
            >
                <div className="relative  flex w-full h-[100vh] overflow-hidden ">
                    <span className='absolute right-0 text-[55px] text-white bottom-0 w-[40%] font-[300]'>
                        REVEALNG A GEM NESTlED IN MODERNITY
                    </span>
                </div>
            </Parallax>

            <p className='flex justify-center w-full py-[70px] text-3xl text-center font-[400]'>
                <span className=' w-[70%] font-[300]' >
                    BREATHTAKING CITY VIEWS AND SXPANSIVE CEILINGS GRACE EACH ROOM COMBINING SCALE WITH CONTEMPORARY LIVING
                </span>
            </p>

            <div className='w-full h-[100vh] flex flex-col text-center text-2xl gap-10 overflow-hidden'>  
                <img className=' object-cover min-h-full min-w-full' src="/images/TA maissonetteliving room double volume 4.png" alt="" />
            </div>

            <div className=' flex w-full h-[100vh] p-16 my-[100px] bg-[#f0eeea] overflow-hidden'>
                <div className='grid-layout grid flex-1 rounded-xl overflow-hidden'>
                    <div className='item-1'>
                        <img src="/images/TA maisonette master bathroom 1.png" alt="" />
                    </div>
                    <div className='item-2'>
                        <img src="/images/tb coffee mini restaurant 1.png" alt="" />
                    </div><div className='item-3 '>
                        <img src="/images/TA maisonette master bedroom 2.png" alt="" />
                    </div>
                </div>
            </div>

            <SlideShow/>

            {/* the golf guy */}

            <div className=' flex h-[100vh] overflow-hidden p-12'>
                <div className='flex-[40%] h-full rounded-xl overflow-hidden'>
                    <img className=' object-cover min-h-full min-w-full' src="/images/golfMan.png" alt="" />
                </div>
                <div className='flex-[60%] flex flex-col items-center mt-10'>
                    <p className=' text-3xl  w-[60%] mb-8'>
                        A CELEBRATION OF THE HIGHEST STANDARDS OF LIVING
                    </p>
                    <p className=' w-[60%] text-xl'>The Skyline Towers provides the scenery of a metropolis nestled in the flare of GRA's historic affluent and green neighbourhood.</p>
                </div>
            </div>

            {/* autoplay background video */}

            <div className=' h-[100vh] mt-40 mb-12'>
                <video className="object-cover w-full h-full" src="/videos/skyline-video.mp4" autoPlay muted loop></video>
            </div>
        </main>
            <Footer/>
        </>
            
    )
}