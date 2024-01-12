import openButton from "@/../public/openButton.svg";
import github from "@/../public/github.gif";
import gitIconRounded from "@/../public/gitIconRounded.gif";
import Image from "next/image";

export default function GitCard({ theme }: { theme: string }) {
    return (
        <div className={`${theme == "dark" ? "white_card" : "white_card_light grain" } rounded-3xl col-span-2 overflow-hidden`}>

            <div className="relative w-full h-full p-8">
                <div className="w-full h-full flex flex-col justify-between">
                    <h2 className="font-bold text-md md:text-l lg:text-3xl">
                        Github
                    </h2>
                </div>
                <Image
                    className={`${theme == "dark" ? "opacity-60" : "opacity-80" } absolute w-full h-full object-cover object-center top-0 left-0 -z-10`}
                    src={github}
                    width={498}
                    height={280}
                    decoding="async"
                    alt=""
                    loading="lazy"
                />
            </div>
            <a href="http://github.com/Angelagex" target="_blank" rel="noopener noreferrer">
                <Image src={openButton} alt="openButton" className="absolute top-4 right-4 w-6" />
            </a>
            <Image src={gitIconRounded} alt="gitIcon" className="absolute bottom-4 right-4 w-10" />
        </div>
    );
}