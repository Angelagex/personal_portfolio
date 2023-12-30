import { SiHtml5, SiTailwindcss, SiCss3, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiAmazonaws, SiGit, SiGnubash, SiFirebase, } from "react-icons/si";
import { FaJava } from "react-icons/fa6";


export default function IconsCard() {
    return (
        <div className="yellow_card_v2 col-span-1 relative rounded-3xl flex justify-center items-center gap-4 lg:gap-5 texl-2xl lg:text-3xl flex-wrap
        p-4 overflow-hidden aspect-square">
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