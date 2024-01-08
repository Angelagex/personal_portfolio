import Image from "next/image";
import mail from "@/../public/mail.svg";
import openButton from "@/../public/openButton.svg";

export default function EmailCard() {
    return (
        <div className="yellow_card col-span-1 relative rounded-3xl flex justify-center items-center overflow-hidden aspect-square">
            <a href="mailto:agelvisangel@gmail.com" target="_blank" rel="noopener noreferrer">
                <Image src={openButton} alt="openButton" className="absolute top-4 right-4 w-6" />
            </a>
            <Image src={mail} alt="linkedInIcon" className="w-3/6 " />
        </div>
    );
}