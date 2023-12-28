import Image from "next/image";
import linkedIn from "@/../public/linkedIn.svg";
import openButton from "@/../public/openButton.svg";

export default function LinkedInCard() {
    return (
        <div className="blue_card col-span-1 relative rounded-3xl flex justify-center aspect-square">
            <Image src={openButton} alt="openButton" className="absolute top-4 right-4 w-6" />
            <Image src={linkedIn} alt="linkedInIcon" className="w-3/6 " />
        </div>
    );
}