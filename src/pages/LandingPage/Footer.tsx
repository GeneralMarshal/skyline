import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

interface Props{
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Footer({showModal, setShowModal}:Props){
    const [isHover, setIsHover] = useState<boolean>(false)
    return (
        <footer className=" bg-[#F1F0EC] w-full py-10 px-12">
            <p className="text-xl md:text-3xl tracking-widest font-[julius]">ENQUIRE NOW</p>
            <p className="text-sm font-[300] lmdtext-lg my-4">Find out how you can be a part of the skyline towers</p>
            <button 
                className=" flex  border gap-12 py-1.5 px-2 w-[150px] rounded-sm font-[julius] items-center mt-8 mb-[100px] border-[#7C7262] text-[#7C7262] cursor-pointer hover:bg-[#7C7262] hover:text-[#ffffff] "
                onClick={()=>{
                    setShowModal(!showModal)
                    setTimeout(()=>{
                        window.scrollBy({
                            top: 300,
                            behavior: "smooth",
                        })
                    }, 500)
                }}
                onMouseEnter={
                    ()=>{
                        setIsHover(true)
                    }
                }
                onMouseLeave={
                    ()=>{
                        setIsHover(false)
                    }
                }
            >
                {isHover ? "ENQUIRE" : "INQUIRE"}
                <FaArrowRight />
            </button>
        </footer>
    )
}