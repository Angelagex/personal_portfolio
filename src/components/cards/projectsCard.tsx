import openButton from "@/../public/openButton.svg";
import projects from "@/../public/projects.gif";
import Image from "next/image";

export default function ProjectsCard() {
    return (
        <div className="yellow_card relative rounded-3xl col-span-2 md:aspect-auto overflow-hidden">
            <div className="w-full h-full absolute top-0 left-0 p-8 z-10">
                <h2 className="font-bold text-md md:text-l lg:text-3xl">
                    Proyectos y Experimentos
                </h2>
                <p className="text-sm lg:text-base md:w-4/5 lg:w-5/6 lg:mt-4">
                    Adéntrate en mi biblioteca digital, donde aguarda una colección de mis proyectos y experimentos. ¡Explora y déjate inspirar!
                </p>
            </div>
            <Image src={openButton} alt="openButton" className="absolute top-4 right-4 w-6" />
            <div className="w-full h-full bg-[#1c053a9c] dark:bg-[#af72ff56] absolute">
                <Image src={projects} className="w-full h-full object-cover opacity-40" alt="" loading="lazy" />
            </div>
        </div>
    );
}