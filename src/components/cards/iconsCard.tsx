import { SiHtml5, SiTailwindcss, SiCss3, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiAmazonaws, SiGit, SiGnubash, SiFirebase, } from "react-icons/si";
import { FaJava } from "react-icons/fa6";


export default function IconsCard({ theme }: { theme: string }) {
    return (
        <div className={`${theme == "dark" ? "yellow_card" : "yellow_card_light grain" } col-span-1 relative rounded-3xl p-6 pt-10 grid grid-cols-4 grid-rows-3 gap-4 lg:gap-5 texl-2xl lg:text-3xl p-4 overflow-hidden aspect-square`}>
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