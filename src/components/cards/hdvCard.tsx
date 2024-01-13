import Image from "next/image";
import hdv from "@/../public/hdv.gif";
import { useTranslations } from "next-intl";
export default async function HdvCard({ theme }: { theme: string }) {
    const t = useTranslations('Hdv');
    return (
        <a
        href={"angel_agelvis.pdf"} 
        target="_blank" 
        rel="noopener noreferrer" 
        download="Angel Agelvis.pdf" 
        className={`${theme == "dark" ? "white_card" : "white_card_light grain" } col-span-1 relative p-2 rounded-3xl flex justify-center aspect-square`}>
                <h2 className="text-white text-center font-bold text-base lg:text-base md:text-sm p-4">
                    {t("title")}
                </h2>
                <Image src={hdv} className="absolute top-0 left-0 object-center object-cover -z-[1000] rounded-3xl opacity-60" alt="" loading="lazy" />
        </a>
    );
}