import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const mailTo = "mailto:desk@skylinetowersikeja.com?subject=Skyline%20Towers%20enquiry"
const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=desk@skylinetowersikeja.com&su=Skyline%20Towers%20enquiry"

function openMail(event: React.MouseEvent<HTMLAnchorElement>) {
    const isPhone = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    if (isPhone) return
    event.preventDefault()
    window.open(gmailUrl, "_blank", "noopener,noreferrer")
}

export default function Footer(){
    return (
        <>
        <a
            href="https://wa.me/2349067432187"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-[#7C7262] bg-[#F1F0EC] text-[#7C7262] shadow-md hover:bg-[#7C7262] hover:text-white"
        >
            <FaWhatsapp className="text-2xl" />
        </a>
        <footer className=" bg-[#F1F0EC] w-full py-10 px-12">
            <p className="text-xl md:text-3xl tracking-widest font-[julius]">ENQUIRE NOW</p>
            <p className="text-sm font-[300] lmdtext-lg my-4">Find out how you can be a part of the skyline towers</p>
            <div className="flex items-center gap-4 mt-8 mb-[100px]">
            <a
                href={mailTo}
                onClick={openMail}
                aria-label="Contact us"
                className="flex items-center justify-center border rounded-sm w-10 h-10 border-[#7C7262] text-[#7C7262] hover:bg-[#7C7262] hover:text-[#ffffff]"
            >
                <FaEnvelope />
            </a>
            <a
                href="https://wa.me/2349067432187"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center border rounded-sm w-10 h-10 border-[#7C7262] text-[#7C7262] hover:bg-[#7C7262] hover:text-[#ffffff]"
            >
                <FaWhatsapp />
            </a>
            </div>
        </footer>
        </>
    )
}
