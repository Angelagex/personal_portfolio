import { useLocale } from "next-intl";
import LanguageSelection from "../ui/languageSelection";


export default function LanguageCard({theme}: {theme: string}) {
    const locale = useLocale();
    return (
        <div className={`${theme == "dark" ? "purple_mix_card" : "purple_mix_card_light grain" } col-span-1 relative rounded-3xl flex flex-col justify-center items-center overflow-hidden aspect-square`}>
            <h3 className="font-rampart-one text-[4.375rem]  mt-6 mb-8 text-center">{locale.toUpperCase()}</h3>
            <LanguageSelection />
        </div>
    );
}