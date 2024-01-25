'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function ProjectsCard({ theme, content, title }: {
    theme: string,
    title: string, content: string
}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    return (
        <a href={`${pathname}/projects?${params.toString()}`} className={`${theme == "dark" ? "white_card" : "white_card_light grain"} relative rounded-3xl col-span-2 md:aspect-auto overflow-hidden`}>
            <div className="w-full h-full absolute top-0 left-0 p-4 sm:p-8 z-10 xl:p-12">
                <div className="font-bold text-xs sm:text-md md:text-l lg:text-3xl xl:text-4xl z-20 interactable">
                    {title}
                </div>
                <p className="text-[0.65rem] leading-3 sm:text-sm lg:text-base xl:text-lg md:w-4/5 lg:w-5/6 lg:mt-4">
                    {content}
                </p>
            </div>
            <Link href={`${pathname}/projects?${params.toString()}`}>
                <Image src={"/openButton.svg"} width={20} height={20} alt="openButton" className="absolute top-4 right-4 w-4 sm:w-6 z-30" />
            </Link>
            <div className="w-full h-full bg-[#1c053a9c] dark:bg-[#af72ff56] absolute">
                <Image 
                placeholder="blur" 
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" 
                src={"/projects.webp"} 
                width={498}
                height={280} 
                className={`w-full h-full object-cover ${theme == "dark" ? "opacity-40" : "opacity-60"}`}
                alt="" 
                loading="lazy"
                unoptimized={true}
                />
            </div>
        </a>
    );
}