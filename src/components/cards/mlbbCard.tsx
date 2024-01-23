import Image from "next/image";

export default async function MlbbCard({ theme }: { theme: string }) {
    return (
        <div className={`${theme == "dark" ? "white_card" : "white_card_light grain grain"} col-span-1 row-span-2 relative p-2 rounded-3xl flex flex-col justify-center aspect-auto`}>
            <section className="z-50 wrapper text-base sm:text-xl lg:text-2xl md:text-3xl xl:text-4xl">
                <div className="font-bold top">
                    {" BEATRIX"}
                </div>
                <div className="font-bold bottom aria-hidden">
                    {" BEATRIX"}
                </div>
            </section>
            <section className="z-50 wrapper text-xs sm:text-base xl:text-xl">
                <div className="font-bold top">
                    {"# 35 - BOGOTA"}
                </div>
                <div className="font-bold bottom aria-hidden">
                    {"# 35 - BOGOTA"}
                </div>
            </section>
            <section className="z-50 wrapper text-xs sm:text-base xl:text-xl whitespace-pre">
                <div className="font-bold top">
                    {"    ID: 536699759"}
                </div>
                <div className="font-bold bottom aria-hidden">
                    {"    ID: 536699759"}
                </div>
            </section>
            <Image placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="src={"/mythic.webp"} alt="mythicLogo" width={500} height={500} className="-z-10 hidden xs:absolute xs:block w-8 sm:w-12 lg:w-16 xl:w-20 top-2 right-2 sm:top-4 sm:right-4" />
            <a href="https://play.google.com/store/apps/details?id=com.mobile.legends" target="_blank" className="interactable">
                <Image placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="src={"/mllogonobg.webp"} alt="mlLogo"  width={500} height={500} className="-z-10 absolute w-20 sm:w-24 lg:w-32 xl:w-40 top-4 left-2 sm:top-6 sm:left-4 xl:top-6 xl:left-6 drop-shadow" />
            </a>
            <Image placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="src={"/beatrix.webp"} alt="beatrixImage"   width={500} height={500} className="-z-10 absolute sm:w-[150px] md:w-[200px] xl:w-[300px] bottom-0 -left-2 beatrix" />
            <Image placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="src={"/mlbgNoText2.webp"} width={500} height={500} className={`absolute h-full top-0 left-0 object-center object-cover -z-[1000] rounded-3xl ${theme == "dark" ? "opacity-50" : "opacity-70"}`} alt="mlBackground" loading="lazy" />
        </div>
    );
}