'use client'

import Image from "next/image";
import pokeStore2 from "@/../public/pokeStore2.png";
import { useState } from "react";
import gitIconRounded from "@/../public/gitIconRounded.gif";


function PokeStoreCard() {
    const [showItems, setShowItems] = useState(false);


    return (
        <article
            onMouseEnter={() => setShowItems(true)}
            onMouseLeave={() => setShowItems(false)}
            className={`white_card col-span-1 row-span-2 h-full relative p-2 rounded-3xl flex flex-col justify-center aspect-auto`}
        >
            <header className={`${showItems ? "hidden" : "customUnderline"} z-20 font-bold text-center text-xl md:text-3xl m-auto`}>
                Poke Store
            </header>
            <main className={`${!showItems ? "hidden" : ""} text-center z-20 font-bold text-sm md:text-base lg:text-lg`}>
                <p className="customUnderline2 inline">React and Typescript</p> project created as part of a Sofka challenge
            </main>
            <footer className={`${!showItems ? "hidden" : ""} z-20 flex flex-col mt-20`}>
                <a href="https://github.com/Angelagex/pokeStore" className="m-auto flex items-center justify-center">
                    <Image src={gitIconRounded} alt="gitIcon" className="w-8" />
                    <p className="text-sm pl-2">Angelagex/pokeStore</p>
                </a>
            </footer>
            <Image src={pokeStore2} className={`w-full h-full absolute -ml-2 rounded-3xl object-cover ${!showItems ? "opacity-50" : "opacity-15"}`} alt="" loading="lazy" />
        </article>
    );
}

export default PokeStoreCard;