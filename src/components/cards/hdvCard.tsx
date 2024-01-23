import Image from "next/image";
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
                <h2 className="text-white text-center font-bold text-[0.65rem] leading-3 sm:text-base lg:text-base xl:text-xl md:text-sm p-2 sm:p-4 xl:p-8 interactable z-20">
                    {t("title")}
                </h2>
                <Image placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="src={"/hdv.webp"} width={500} height={500} className="absolute top-0 left-0 object-center object-cover -z-[1000] rounded-3xl opacity-60" alt="" loading="lazy" />
        </a>
    );
}