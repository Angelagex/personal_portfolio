'use client'

import Image from "next/image";
import portfolio from "@/../public/portfolio.png";
import { useState } from "react";
import gitIconRounded from "@/../public/gitIconRounded.gif";


function PortfolioCard() {
    const [showItems, setShowItems] = useState(false);


    return (
        <article
            onMouseEnter={() => setShowItems(true)}
            onMouseLeave={() => setShowItems(false)}
            className={`white_card col-span-1 row-span-2 h-full relative p-2 rounded-3xl flex flex-col justify-center aspect-auto`}
        >
            <header className={`${showItems ? "hidden" : "customUnderline"} z-20 font-bold text-center text-xl md:text-3xl m-auto`}>
                Personal Portfolio
            </header>
            <main className={`${!showItems ? "hidden" : ""} text-center z-20 font-bold text-sm md:text-base lg:text-lg`}>
                <p className="customUnderline2 inline">Nextjs and Typescript</p> portfolio that showcases the improve of my development skills
            </main>
            <footer className={`${!showItems ? "hidden" : ""} z-20 flex flex-col mt-20`}>
                <a href="https://github.com/Angelagex/personal_portfolio" className="m-auto flex items-center justify-center">
                    <Image src={gitIconRounded} alt="gitIcon" className="w-8" />
                    <p className="text-sm pl-2">Angelagex/personal_portfolio</p>
                </a>
            </footer>
            <Image src={portfolio} className={`w-full h-full absolute -ml-2 rounded-3xl object-cover ${!showItems ? "opacity-50" : "opacity-15"}`} alt="" loading="lazy" />
        </article>
    );
}

export default PortfolioCard;