'use client'

import Image from "next/image";
import { JSXElementConstructor, ReactElement, ReactNodeArray, useState } from "react";

function PortfolioCard({ title, content, theme }: { title: string, content: string | ReactElement<any, string | JSXElementConstructor<any>> | ReactNodeArray, theme: string }) {
    const [showItems, setShowItems] = useState(false);
    const opacityHandler = theme == 'dark' ? { out: "opacity-75", in: "opacity-35" } : { out: "opacity-85", in: "opacity-45" }

    return (
        <article
            onMouseEnter={() => setShowItems(true)}
            onMouseLeave={() => setShowItems(false)}
            className={`${theme == "dark" ? "white_card" : "white_card_light grain"}  col-span-1 row-span-2 h-full relative p-2 rounded-3xl flex flex-col justify-center aspect-auto`}
        >
            <header className={`${showItems ? "hidden" : "customUnderline"} z-20 font-bold text-center text-xl md:text-3xl m-auto`}>
                {title}
            </header>
            <main className={`${!showItems ? "hidden" : ""} text-center z-20 font-bold text-[0.65rem] leading-3 xs:text-sm md:text-base lg:text-lg`}>
                {content}
            </main>
            <footer className={`${!showItems ? "hidden" : ""} z-20 flex flex-col mt-4 xs:mt-10 sm:mt-20`}>
                <a href="https://github.com/Angelagex/personal_portfolio" target="_blank" className="m-auto flex items-center justify-center interactable z-20">
                    <Image placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" src={"/gitIconRounded.webp"} width={20} height={20} alt="gitIcon" className="w-4 xs:w-8" />
                    <p className="hidden sm:inline sm:text-xs md:text-sm pl-[0.25rem] xs:pl-2">Angelagex/</p>
                    <p className="text-[0.65rem] leading-3 sm:text-xs md:text-sm pl-2 sm:pl-0">portfolio</p>
                </a>
            </footer>
            <Image placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" src={"/portfolio.webp"} width={500} height={500} className={`w-full h-full absolute -ml-2 rounded-3xl object-cover ${!showItems ? opacityHandler.out : opacityHandler.in}`} alt="" loading="lazy" />
        </article>
    );
}

export default PortfolioCard;