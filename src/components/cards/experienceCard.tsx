export default function ExperienceCard({ theme }: { theme: string }) {
    return (
        <div className={`${theme == "dark" ? "purple_mix_card" : "purple_mix_card_light grain" } col-span-1 relative rounded-3xl flex flex-col justify-center items-center overflow-hidden aspect-square`}>
            <div className="flex -ml-4">
                <h3 className="font-rampart-one text-6xl mt-6 mb-4 text-center">+1<sup className="text-[2.575rem]">.5</sup></h3>
            </div>
            <div className="flex w-40 px-1">
                <p className="font-raleway text-center uppercase text-sm text-pretty">Años de Experiencia</p>
            </div>
        </div>
    );
}