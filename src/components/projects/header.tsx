'use client'

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { IoArrowUndoSharp } from "react-icons/io5";

function Header({title, theme}: {title: string, theme: string}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    return (
        <header className={`${theme == "dark" ? "purple_mix_card" : "purple_mix_card_light grain" } w-[95%] container mx-auto xl:px-20 rounded-3xl mt-5 flex items-center z-20 relative`}>
            <Link href={`${pathname.replace("/projects", "")}/?${params.toString()}`} className="z-20 interactable">
                <IoArrowUndoSharp className="my-auto mr-4 sm:mr-6 ml-6 text-3xl sm:text-4xl" />
            </Link>
            <h1 className="title mt-6 text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-5 font-raleway"> {title}</h1>
            <h2 className="title ml-3 mt-8 whitespace-pre text-lg sm:text-xl lg:text-2xl font-bold text-[#ffffffb4] mb-4 md:mb-5 font-raleway z-20 interactable"> |   Angel Agelvis </h2>
        </header>
    );
}

export default Header;