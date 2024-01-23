import Image from "next/image";

export default function EmailCard({ theme }: { theme: string }) {
    return (
        <div className={`${theme == "dark" ? "yellow_card" : "yellow_card_light grain" } col-span-1 relative rounded-3xl flex justify-center items-center overflow-hidden aspect-square`}>
            <a href="mailto:agelvisangel@gmail.com" target="_blank" rel="noopener noreferrer">
                <Image src={"/openButton.svg"} width={20} height={20} alt="openButton" className="absolute top-4 right-4 w-4 sm:w-6" />
            </a>
            <a href="http://linkedin.com/in/angel-agelvis" target="_blank" className="w-full m-auto z-20">
                <Image placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="src={"/mail.svg"}  width={100} height={100} alt="linkedInIcon" className="w-3/6 interactable m-auto" />
            </a>
        </div>
    );
}