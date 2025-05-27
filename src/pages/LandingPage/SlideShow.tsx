import { useState } from "react"
export default function SlideShow(){
    const [showImage, setShowImage] = useState("/slideshowImages/study.png")
    function handleImage(type:string){
        const newImage = `/slideshowImages/${type}.png`
        setShowImage(newImage)
    }
    return(
        <section className="flex flex-col w-full max-h-[100vh] mb:20px lg:mb-[100px] gap-10 p-6 lg:p-10 items-center">
            <p className="flex text-3xl font-[400] ">
                UNIQUE BLEND OF EXCLUSIVITY AND TRANQUILITY
            </p>
            <div className="flex flex-1  w-full items-start">
                <div className=" flex-[40%]">
                    <ul className="show-options leading-10">
                        <li onMouseEnter={()=>handleImage("study")} className=" cursor-pointer w-40">STUDY</li>
                        <li onMouseEnter={()=>handleImage("pool")} className=" cursor-pointer w-40" >SWIMMING POOL</li>
                        <li onMouseEnter={()=>handleImage("playground")} className=" cursor-pointer w-40" >KIDS PLAYGROUND</li>
                        <li onMouseEnter={()=>handleImage("gym")} className=" cursor-pointer w-40" >GYM</li>
                        <li onMouseEnter={()=>handleImage("salon")} className=" cursor-pointer w-40" >SALON AND SPA</li>
                        <li onMouseEnter={()=>handleImage("meeting")} className=" cursor-pointer w-40   " >MEETING ROOOM</li>

                    </ul>
                </div>
                <div className=" flex-[60%] w-full h-full overflow-hidden rounded-xl transition ease-in duration-100 ">
                    <img key={showImage} className="fade-image object-cover min-h-full min-w-full" src={showImage} alt="" />
                </div>
            </div>
        </section>
    )
}