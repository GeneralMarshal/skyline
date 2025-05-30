import { FaArrowRight } from "react-icons/fa";

export default function Modal(){
    return(
        <form className="flex flex-col w-full max-w-[540px] py-12 px-8" action="">
            <p className=" mb-8 tracking-widest text-xl font-[Julius]">ENQUIRE</p>
            <input className=" my-2 text-md py-2 px-2 rounded-sm border border-[#1a1a1a] "  type="text" placeholder="Enter your name"/>
            <input className=" my-2 text-md py-2 px-2 rounded-sm border border-[#1a1a1a]" type="text" placeholder="Email Address"/>
            <input className=" my-2 text-md py-2 px-2 rounded-sm border border-[#1a1a1a]" type="text" placeholder="Phone Number"/>
            <textarea className=" my-2 text-md p-y2 px-2 rounded-sm border border-[#1a1a1a] h-24" name="" id="" placeholder="Your message">

            </textarea>
            <button className=" flex border gap-12 py-1.5 px-2 rounded-sm items-center mt-8 border-[#7C7262] text-[#7C7262] w-[140px] font-[julius] hover:bg-[#7C7262] hover:text-[#ffffff] cursor-pointer">
                SUBMIT
                <FaArrowRight />
            </button>
        </form>
    )
}