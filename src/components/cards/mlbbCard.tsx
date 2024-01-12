import Image from "next/image";
import mlbg3 from "@/../public/mlbg3.jpg";
import beatrix from "@/../public/beatrix.png";
import mythic from "@/../public/mythic.png";


export default async function MlbbCard({ theme }: { theme: string }) {
    return (
        <div className={`white_card col-span-1 row-span-2 relative p-2 rounded-3xl flex flex-col justify-center aspect-auto`}>
            <section className="z-50 wrapper text-xl lg:text-2xl md:text-3xl">
                <div className="font-bold top">
                    {" BEATRIX"}
                </div>
                <div className="font-bold bottom aria-hidden">
                    {" BEATRIX"}
                </div>
            </section>
            <section className="z-50 wrapper text-xs lg:text-xs md:text-xs">
                <div className="font-bold top">
                    {"NRO.35 - BOGOTA"}
                </div>
                <div className="font-bold bottom aria-hidden">
                    {"NRO.35 - BOGOTA"}
                </div>
            </section>
            <Image src={mythic} alt="beatrixImage" className="-z-10 absolute w-14 top-2 left-2 " />
            <Image src={beatrix} alt="beatrixImage" className="-z-10 absolute w-[200px] bottom-0 -left-2 beatrix" />
            <Image src={mlbg3} className="fixed h-full top-0 left-0 object-center object-cover -z-[1000] rounded-3xl opacity-60" alt="" loading="lazy" />
        </div>
    );
}