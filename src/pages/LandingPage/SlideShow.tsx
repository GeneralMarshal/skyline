import { useState } from "react"
export default function SlideShow(){
    const [showImage, setShowImage] = useState("/slideshowImages/study.png")
    function handleImage(type:string){
        const newImage = `/slideshowImages/${type}.png`
        setShowImage(newImage)
    }
    return(
        <section className="flex flex-col w-full h-[100vh] gap-12 p-10 items-center">
            <p className=" text-3xl ">
                UNIQUE BLEND OF EXCLUSIVITY AND TRANQUILITY
            </p>
            <div className="flex  w-full items-start">
                <div className=" flex-[40%]">
                    <ul className=" leading-10">
                        <li onMouseEnter={()=>handleImage("study")} className=" cursor-pointer">STUDY</li>
                        <li onMouseEnter={()=>handleImage("pool")} className=" cursor-pointer" >SWIMMING POOL</li>
                        <li onMouseEnter={()=>handleImage("playground")} className=" cursor-pointer" >KIDS PLAYGROUND</li>
                        <li onMouseEnter={()=>handleImage("gym")} className=" cursor-pointer" >GYM</li>
                        <li onMouseEnter={()=>handleImage("salon")} className=" cursor-pointer" >SALON AND SPA</li>
                        <li onMouseEnter={()=>handleImage("meeting")} className=" cursor-pointer" >MEETING ROOOM</li>

                    </ul>
                </div>
                <div className=" flex-[60%] w-full h-full overflow-hidden rounded-xl transition ease-in duration-100 ">
                    <img key={showImage} className="fade-image object-cover min-h-full min-w-full" src={showImage} alt="" />
                </div>
            </div>
        </section>
    )
}