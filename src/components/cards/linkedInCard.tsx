import Image from "next/image";

export default function LinkedInCard({ theme }: { theme: string }) {
    return (
        <div className={`${theme == "dark" ? "blue_card" : "blue_card_light grain"} col-span-1 relative rounded-3xl flex justify-center aspect-square`}>
            <a href="http://linkedin.com/in/angel-agelvis" target="_blank">
                <Image src={"openButton.svg"} alt="openButton" className="absolute top-4 right-4 w-6" />
            </a>
            <a href="http://linkedin.com/in/angel-agelvis" target="_blank" className="w-full m-auto z-20">
                <Image src={"linkedIn.svg"} alt="linkedInIcon" className="w-3/6 interactable m-auto" />
            </a>
        </div>
    );
}