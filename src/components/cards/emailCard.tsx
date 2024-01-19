import Image from "next/image";
import mail from "mail.svg";
import openButton from "openButton.svg";

export default function EmailCard({ theme }: { theme: string }) {
    return (
        <div className={`${theme == "dark" ? "yellow_card" : "yellow_card_light grain" } col-span-1 relative rounded-3xl flex justify-center items-center overflow-hidden aspect-square`}>
            <a href="mailto:agelvisangel@gmail.com" target="_blank" rel="noopener noreferrer">
                <Image src={openButton} alt="openButton" className="absolute top-4 right-4 w-6" />
            </a>
            <a href="http://linkedin.com/in/angel-agelvis" target="_blank" className="w-full m-auto z-20">
                <Image src={mail} alt="linkedInIcon" className="w-3/6 interactable m-auto" />
            </a>
        </div>
    );
}