import { FaArrowRight } from "react-icons/fa";

export default function Footer(){
    return (
        <footer className=" bg-[#F1F0EC] py-10 px-12">
            <p className=" text-3xl tracking-widest">ENQUIRE NOW</p>
            <p className=" text-lg my-4">Find out how you can be a part of the skyline towers</p>
            <button className=" flex  border gap-12 py-1.5 px-2 rounded-sm items-center mt-8 mb-[100px] border-[#7C7262] text-[#7C7262]">
                ENQUIRE
                <FaArrowRight />
            </button>
        </footer>
    )
}