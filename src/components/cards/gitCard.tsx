import openButton from "@/../public/openButton.svg";
import github from "@/../public/github.gif";
import gitIconRounded from "@/../public/gitIconRounded.gif";
import Image from "next/image";

export default function GitCard() {
    return (
        <div className="white_card rounded-3xl col-span-2 overflow-hidden">

            <div className="relative w-full h-full sm:p-12 p-8 md:p-8">
                <div className="w-full h-full flex flex-col justify-between">
                    <h2 className="font-bold text-md md:text-l lg:text-3xl z-40">
                        Github
                    </h2>
                </div>
                <Image
                    className="absolute w-full h-full object-cover object-center top-0 left-0 -z-10"
                    src={github}
                    width={498}
                    height={280}
                    decoding="async"
                    style={{ opacity: "60%" }}
                    alt=""
                    loading="lazy"
                />
            </div>
            <div className="relative w-full h-full sm:p-12 p-8 md:p-12"></div>
            <Image src={openButton} alt="openButton" className="absolute top-4 right-4 w-6" />
            <Image src={gitIconRounded} alt="openButton" className="absolute bottom-4 right-4 w-10" />

        </div>
    );
}