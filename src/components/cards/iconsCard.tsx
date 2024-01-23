import { SiHtml5, SiTailwindcss, SiCss3, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiAmazonaws, SiGit, SiGnubash, SiFirebase, } from "react-icons/si";
import { FaJava } from "react-icons/fa6";


export default function IconsCard({ theme }: { theme: string }) {
    return (
        <div className={`${theme == "dark" ? "yellow_card" : "yellow_card_light grain" } col-span-1 relative rounded-3xl p-4 pt-[0.75rem] pl-[0.75rem] xs:pt-6 sm:p-6 xl:p-8 sm:pt-10 xl:pl-12 xl:pt-14 grid grid-cols-4 grid-rows-3 gap-4 lg:gap-5 text-sm xxs:text-base xs:text-lg sm:texl-2xl lg:text-3xl xl:text-4xl overflow-hidden aspect-square`}>
            <SiHtml5 />
            <SiCss3 />
            <SiTypescript />
            <SiReact />
            <SiNextdotjs />
            <SiNodedotjs />
            <SiAmazonaws />
            <FaJava />
            <SiGit />
            <SiGnubash />
            <SiFirebase />
            <SiTypescript />
        </div>
    );
}