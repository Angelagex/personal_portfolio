import LanguageSelection from "../ui/languageSelection";


export default function LanguageCard({theme}: {theme: string}) {
    return (
        <div className={`${theme == "dark" ? "purple_mix_card" : "purple_mix_card_light grain" } col-span-1 relative rounded-3xl flex flex-col justify-center items-center overflow-hidden aspect-square`}>
            <LanguageSelection />
        </div>
    );
}