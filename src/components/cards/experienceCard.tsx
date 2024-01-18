import { useTranslations } from "next-intl";

export default function ExperienceCard({ theme }: { theme: string }) {
    const t = useTranslations('Experience');
    return (
        <div className={`${theme == "dark" ? "purple_mix_card" : "purple_mix_card_light grain"} col-span-1 relative rounded-3xl flex flex-col justify-center items-center overflow-hidden aspect-square`}>
            <div className="flex -ml-4">
                <h3 className="font-rampart-one text-4xl sm:text-6xl xl:text-8xl mt-6 -mb-2 sm:mb-4 text-center z-20 interactable">+1
                    <sup className="text-2xl sm:text-[2.575rem] xl:text-6xl">.5</sup>
                </h3>
            </div>
            <div className="flex w-40 px-1">
                <p className="font-raleway p-4 sm:p-0 text-center uppercase text-xs sm:text-sm xl:text-lg text-pretty">{t("content")}</p>
            </div>
        </div>
    );
}