import Image from "next/image";
import hdv from "@/../public/hdv.gif";


export default async function HdvCard() {
    return (
        <div className={`white_card col-span-1 relative p-2 rounded-3xl flex justify-center aspect-square`}>
                <h2 className="text-white text-center font-bold text-base lg:text-lg md:text-base">
                    {"Presiona para obtener la hoja faltante"}
                </h2>
                <Image src={hdv} className="absolute top-0 left-0 object-center object-cover -z-[1000] rounded-3xl opacity-60" alt="" loading="lazy" />
        </div>
    );
}