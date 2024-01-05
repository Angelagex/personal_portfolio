export default function ProfileCard() {
    return (
        <article className="relative col-span-3 h-80 md:h-auto md:aspect-auto md:row-span-2 rounded-3xl overflow-hidden purple_mix_card flex justify-center items-center p-6">
            <div className="h-full md:w-[65%] absolute top-0 left-0 p-8 pt-16 flex flex-col justify-start md:justify-end md:pb-12">
                <h1 className="interactable title text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-5 font-raleway">I’m Angel Agelvis</h1>
                <p className="text-sm md:text-base lg:text-xl md:pb-2">Desarrollador Fullstack con experiencia implementando soluciones en Typescript, NextJs, Java, AWS. Soy un apasionado por la innovación, afrontar nuevos retos, el aprendizaje constante y experimentar con nuevas tecnologias.</p>
                <p className="text-sm md:text-base lg:text-xl"> ¿Listos para explorar el futuro juntos? </p>
            </div>
            <div className="w-1/3"></div>
        </article>
    );
}