import LanguageSelection from "../ui/languageSelection";


export default function LanguageCard({language}: {language: string}) {
    return (
        <div className="purple_mix_card col-span-1 relative rounded-3xl flex flex-col justify-center items-center overflow-hidden aspect-square">
            <h3 className="font-rampart-one text-[4.375rem]  mt-6 mb-8 text-center">{language}</h3>
            <LanguageSelection />
        </div>

    );
}