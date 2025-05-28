import SlideShow from './SlideShow';
import { Parallax} from 'react-parallax';
import { useEffect, useRef, useState } from "react";
import Footer from './Footer';
import Modal from './Modal';
export default function LandingPage(){

    const [showModal, setShowModal] = useState<boolean>(false)

    const sectionRef = useRef(null)
    const [inview, setInView] = useState(false)

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting)
            },
            {threshold: 0.6}
        )

        if(sectionRef.current) observer.observe(sectionRef.current)
        return () =>{
            if (sectionRef.current) observer.unobserve(sectionRef.current)
        }
    },[])

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

             <div className=" w-full px-10  py-10 h-[20vh] lg:h-[20vh] flex flex-col justify-center">
                 <h1 className=" md:w-[80%] text-2xl md:text-4xl lg:text-5xl font-[400] font-[julius] tracking-wider">
                     THE TALLEST RESIDENTIAL BUILDING IN IKEJA GRA
                 </h1>
             </div>

            <div ref={sectionRef} className={`transition-transform duration-700 mb-10 ease-out w-full lg:h-[100vh]  flex items-center justify-center ${inview ? "scale-110" : "scale-95"}`}>
                <div className="gap-4 lg:gap-8 p-8 lg:p-12 w-[60%] h-[90%] flex flex-wrap lg:flex-nowrap" >
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
                    <span className='absolute right-0  text-2xl md:text-3xl lg:text-[55px] text-white font-[julius] bottom-0 w-[40%] font-[400]'>
                        REVEALNG A GEM NESTlED IN MODERNITY
                    </span>
                </div>
            </Parallax>

            <p className='flex justify-center w-full px-4 py-14 lg:py-[70px] text-lg md:text-xl lg:text-3xl text-center font-[400]'>
                <span className=' lg:w-[70%] font-[400] font-[julius]'  >
                    BREATHTAKING CITY VIEWS AND SXPANSIVE CEILINGS GRACE EACH ROOM COMBINING SCALE WITH CONTEMPORARY LIVING
                </span>
            </p>

            <div className='w-full h-[100vh] flex flex-col text-center text-2xl gap-10 overflow-hidden'>  
                <img className=' object-cover min-h-full min-w-full' src="/images/TA maissonetteliving room double volume 4.png" alt="" />
            </div>

            <div className=' flex w-full h-[100vh] p-8 md:p-16 my-6 md:my-8 lg:my-[100px] bg-[#f0eeea] overflow-hidden'>
                <div className='grid-layout flex gap-4 flex-col justify-around md:grid flex-1 md:rounded-xl overflow-hidden'>
                    <div className='flex-1 item-1'>
                        <img src="/images/TA maisonette master bathroom 1.png" alt="" />
                    </div>
                    <div className='flex-1 item-2'>
                        <img src="/images/tb coffee mini restaurant 1.png" alt="" />
                    </div><div className='flex-1 item-3 '>
                        <img src="/images/TA maisonette master bedroom 2.png" alt="" />
                    </div>
                </div>
            </div>

            <SlideShow/>

            {/* the golf guy */}

            <div className=' flex max-h-[100vh] overflow-hidden p-6 lg:p-12'>
                <div className='flex-[40%] h-full rounded-xl overflow-hidden'>
                    <img className=' object-cover min-h-full min-w-full' src="/images/golfMan.png" alt="" />
                </div>
                <div className='flex-[60%] flex flex-col items-center px-6 mt-2 md:mt-4 lg:mt-10'>
                    <p className=' lg:w-[70%] text-xl md:text-2xl lg:text-3xl font-[400]  mb-2 md:mb-4 lg:mb-8 font-[julius]'>
                        A CELEBRATION OF THE HIGHEST STANDARDS OF LIVING
                    </p>
                    <p className='  lg:w-[70%] text-sm md:text-xl lg:text-2xl'>The Skyline Towers provides the scenery of a metropolis nestled in the flare of GRA's historic affluent and green neighbourhood.</p>
                </div>
            </div>

            {/* autoplay background video */}

            <div className=' h-[100vh] mt-40 mb-12'>
                <video className="object-cover w-full h-full" src="/videos/skyline-video.mp4" autoPlay muted loop></video>
            </div>
        </main>
        <section className='flex w-full justify-center flex-wrap md:flex-nowrap'>
            <Footer showModal={showModal} setShowModal={setShowModal}/>
            {showModal && <Modal/>}
        </section>
        </>
            
    )
}