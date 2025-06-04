import SlideShow from './SlideShow';
import { Parallax} from 'react-parallax';
import { useEffect, useRef, useState } from "react";
import Footer from './Footer';
import Modal from './Modal';
export default function LandingPage(){

    const [showModal, setShowModal] = useState<boolean>(false)
    const [scrolled, setScrolled] = useState<boolean>(false)
    const [showIcon, setShowIcon] = useState<boolean>(true)

    const sectionRef = useRef(null)
    const [inview, setInView] = useState(false)

    function onScroll() {
        const width = window.innerWidth;
        const height = window.innerHeight;
      
        const thresholdRatio =
          width >= 1024 ? 0.35 : 
          width >= 768 ? 0.2 :   
          0.15;                  
      
        const threshold = height * thresholdRatio;
      
        setScrolled(window.scrollY > 10);
        setShowIcon(window.scrollY < height - threshold);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setInView(entry.isIntersecting); 
          },
          { threshold: 0.5 }
        );
      
        if (sectionRef.current) observer.observe(sectionRef.current);
      
        return () => {
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
      }, []);

    useEffect(()=>{
        // this for the top animation
        window.addEventListener("scroll", onScroll)
        return ()=> window.removeEventListener("scroll", onScroll)
    })

    return(
        <>
            <header className=' z-0'>
                <Parallax strength={300}
                    bgImage="/images/street view 1.png" 
                    bgImageStyle={{objectFit: "cover", minWidth: "100%", minHeight: "100%", height: "auto"}}
                >
                    <div className="icon-containter flex w-full h-[100vh] p-10 overflow-hidden ">

                        <img 
                            className={`${ scrolled ? "icon-animate-scrolled" : "icon-animate"} fixed px-8 py-6 md:px-12 md:py-8 lg:px-32 lg:py-18 ` }
                            style={{
                                display: showIcon ? "block" : "none"
                            }}
                            src="/icons/Investor's narrative 1.svg" 
                            alt="investors narrative" 
                        />
                    </div>
                </Parallax>
            </header>
            <main className='z-10 bg-[#f1f0ec]'>
                {/* tallest section */}
                <Parallax strength={600} lazy>
                    <div  className="w-full px-4 md:px-10 py-12 md:py-22 lg:py-32 h-[20vh] lg:h-[20vh] flex flex-col justify-center">
                        <h1 className="  md:w-[70%] lg:w-[60%] text-2xl md:text-4xl lg:text-5xl font-[400] font-[julius] tracking-wider">
                            THE TALLEST RESIDENTIAL BUILDING IN IKEJA GRA
                        </h1>
                    </div>
                    <div ref={sectionRef}  className={`w-full  flex items-center justify-center  `}>
                        <div   
                            className={`gap-2 md:gap-4 lg:gap-8 px-4 md:px-10 w-full h-full flex justify-center items-start flex-1  md:flex-nowrap overflow-hidden } transform transition-transform duration-700 mb-10 ease-out will-change-transform origin-center `} 
                            style={{
                                scale: inview ? 0.8 : 1
                            }}
                        >
                                <img  className=" object-contain object-center h-auto w-[65%] " src="/images/TA penthouse 2 dry kitchen dining 1.png" alt="" />
                                <img  className=" object-contain object-center h-auto w-[35%] " src="/images/Picture → 1729154318-home-2.jpg.png" alt="" />
                        </div>
                    </div>
                </Parallax>
                

            {/* golf course section */}
                <Parallax strength={600} 
                    bgImage="/images/unsplash_buGdVvTxJ38.png" 
                    bgImageStyle={{objectFit: "cover", minWidth: "100%", minHeight: "100%", height: "auto"}}
                >
                    <div className="relative  flex w-full h-[100vh] overflow-hidden ">
                        <span className='absolute right-10 font-[500] text-2xl md:text-3xl lg:text-[55px] text-white font-[julius] bottom-10 w-[40%]'>
                            REVEALNG A GEM NESTlED IN MODERNITY
                        </span>
                    </div>
                </Parallax>

            {/* photo grid section */}
            <p className='flex justify-center w-full px-4 py-8 md:py-14 lg:py-[70px] text-lg md:text-xl lg:text-3xl text-center font-[400]'>
                <span className=' lg:w-[70%] font-[400] font-[julius]'  >
                    BREATHTAKING CITY VIEWS AND EXPANSIVE CEILINGS GRACE EACH ROOM COMBINING SCALE WITH CONTEMPORARY LIVING
                </span>
            </p>

            <div className='w-full max-h-[100vh] flex flex-col text-center text-2xl gap-10 overflow-hidden'>  
                <img className=' object-cover min-h-full min-w-full' src="/images/TA maissonetteliving room double volume 4.png" alt="" />
            </div>

            <div className=' flex w-full max-h-[100vh] p-4 md:p-12 my-2 md:my-8 lg:my-[100px] bg-[#f0eeea] overflow-hidden'>
                <div className='grid-layout gap-1 md:gap-2 lg:gap-4 grid flex-1  overflow-hidden'>
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

            {/* slideshow section */}

            <SlideShow/>

            {/* the golf guy */}

            <div className=' flex max-h-[100vh] overflow-hidden p-6 lg:p-12'>
                <div className='flex-[40%] h-full rounded-sm mg:rounded-lg overflow-hidden'>
                    <img className=' object-cover min-h-full min-w-full' src="/images/golfMan.png" alt="" />
                </div>
                <div className='flex-[60%] flex flex-col items-center px-4 md:px-6 mt-2 md:mt-4 lg:mt-10'>
                    <p className=' lg:w-[70%] text-md md:text-2xl lg:text-3xl font-[400]  mb-2 md:mb-4 lg:mb-8 font-[julius]'>
                        A CELEBRATION OF THE HIGHEST STANDARDS OF LIVING
                    </p>
                    <p className='  lg:w-[70%] text-xs md:text-xl lg:text-2xl font-[300]'>The Skyline Towers provides the scenery of a metropolis nestled in the flare of GRA's historic affluent and green neighbourhood.</p>
                </div>
            </div>

            {/* autoplay background video */}

            <div className=' h-auto mt-16 lg:mt-22 mb-12 lg:mb-18'>
                <video className="object-cover w-full max-h-full" src="/videos/skyline-video.mp4" autoPlay muted loop playsInline></video>
            </div>
        </main>
        <section className='flex w-full justify-center flex-wrap md:flex-nowrap'>
            <Footer showModal={showModal} setShowModal={setShowModal}/>
            {showModal && <Modal/>}
        </section>
        </>
            
    )
}