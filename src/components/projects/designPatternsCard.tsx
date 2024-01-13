'use client'

import Image from "next/image";
import designPatterns from "@/../public/designPatterns.gif";
import { JSXElementConstructor, ReactElement, ReactNodeArray, useState } from "react";
import gitIconRounded from "@/../public/gitIconRounded.gif";


function DesignPatternsCard({title, content, theme}: {title: string, content: string | ReactElement<any, string | JSXElementConstructor<any>> | ReactNodeArray, theme: string}) {
    const [showItems, setShowItems] = useState(false);
    const opacityHandler = theme == 'dark' ? {out: "opacity-75", in:"opacity-35"} : {out:"opacity-85", in: "opacity-45"}


    return (
        <article
            onMouseEnter={() => setShowItems(true)}
            onMouseLeave={() => setShowItems(false)}
            className={`${theme == "dark" ? "white_card" : "white_card_light grain" }  col-span-1 row-span-2 h-full relative p-2 rounded-3xl flex flex-col justify-center aspect-auto`}
        >
            <header className={`${showItems ? "hidden" : "customUnderline"} z-20 font-bold text-center text-xl md:text-3xl m-auto`}>
                {title}
            </header>
            <main className={`${!showItems ? "hidden" : ""} text-center z-20 font-bold text-sm md:text-base lg:text-lg`}>
                {content}
            </main>
            <footer className={`${!showItems ? "hidden" : ""} z-20 flex flex-col mt-20`}>
                <a href="https://github.com/Angelagex/designPatterns" className="m-auto flex items-center justify-center">
                    <Image src={gitIconRounded} alt="gitIcon" className="w-8" />
                    <p className="text-sm pl-2">Angelagex/designPatterns</p>
                </a>
            </footer>
            <Image src={designPatterns} className={`w-full h-full absolute -ml-2 rounded-3xl object-cover ${!showItems ? opacityHandler.out : opacityHandler.in}`} alt="" loading="lazy" />
        </article>
    );
}

export default DesignPatternsCard;