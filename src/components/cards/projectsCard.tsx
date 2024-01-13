'use client'
import openButton from "@/../public/openButton.svg";
import projects from "@/../public/projects.gif";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ProjectsCard({ theme, content, title }: { theme: string,
title: string, content: string }) {

    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    return (
        <div className={`${theme == "dark" ? "white_card" : "white_card_light grain" } relative rounded-3xl col-span-2 md:aspect-auto overflow-hidden`}>
            <div className="w-full h-full absolute top-0 left-0 p-8 z-10">
                <h2 className="font-bold text-md md:text-l lg:text-3xl">
                    {title}
                </h2>
                <p className="text-sm lg:text-base md:w-4/5 lg:w-5/6 lg:mt-4">
                    {content}
                </p>
            </div>
            <Link href={`/projects?${params.toString()}`}>
                <Image src={openButton} alt="openButton" className="absolute top-4 right-4 w-6 z-30" />
            </Link>
            <div className="w-full h-full bg-[#1c053a9c] dark:bg-[#af72ff56] absolute">
                <Image src={projects} className={`w-full h-full object-cover ${theme == "dark" ? "opacity-40" : "opacity-60" }`} alt="" loading="lazy" />
            </div>
        </div>
    );
}