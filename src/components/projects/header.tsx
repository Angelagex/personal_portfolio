'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { IoArrowUndoSharp } from "react-icons/io5";

function Header({language, theme}: {language: string, theme: string}) {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    return (
        <header className={`${theme == "dark" ? "purple_mix_card" : "purple_mix_card_light grain" } container mx-auto xl:px-20 rounded-3xl mt-5 flex items-center`}>
            <Link href={`/?${params.toString()}`} className="z-20">
                <IoArrowUndoSharp className="my-auto mr-6 ml-6 text-4xl" />
            </Link>
            <h1 className="title mt-6 text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-5 font-raleway"> Projects</h1>
            <h2 className="title ml-3 mt-8 whitespace-pre text-xl lg:text-2xl font-bold text-[#ffffffb4] mb-4 md:mb-5 font-raleway"> |   Angel Agelvis </h2>
        </header>
    );
}

export default Header;