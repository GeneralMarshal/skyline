import { useState } from "react"
export default function SlideShow(){
    const [showImage, setShowImage] = useState("/slideshowImages/study.png")
    function handleImage(type:string){
        const newImage = `/slideshowImages/${type}.png`
        setShowImage(newImage)
    }
    return(
        <section className="flex flex-col w-full max-h-[100vh] lg:mb:20px lg:mb-[100px] gap-4 md:gap-6 lg:gap-10 p-6 lg:p-10 items-center">
            <p className="flex text-xl md:text-2xl lg:text-3xl font-[400] font-[julius]">
                UNIQUE BLEND OF EXCLUSIVITY AND TRANQUILITY
            </p>
            <div className="flex flex-1 w-full items-start">
                <div className=" flex-[40%]">
                    <ul className="show-options text-sm md:text-lg lg:text-2xl md:leading-10 lg:leading-15 ">
                        <li onMouseEnter={()=>handleImage("study")} className=" cursor-pointer ">STUDY</li>
                        <li onMouseEnter={()=>handleImage("pool")} className=" cursor-pointer " >SWIMMING POOL</li>
                        <li onMouseEnter={()=>handleImage("playground")} className=" cursor-pointer " >KIDS PLAYGROUND</li>
                        <li onMouseEnter={()=>handleImage("gym")} className=" cursor-pointer " >GYM</li>
                        <li onMouseEnter={()=>handleImage("salon")} className=" cursor-pointer " >SALON AND SPA</li>
                        <li onMouseEnter={()=>handleImage("meeting")} className=" cursor-pointer    " >MEETING ROOOM</li>

                    </ul>
                </div>
                <div className=" flex-[60%] w-full h-full overflow-hidden rounded-md md:rounded-xl transition ease-in duration-100 ">
                    <img key={showImage} className="fade-image object-cover min-h-full min-w-full" src={showImage} alt="" />
                </div>
            </div>
        </section>
    )
}