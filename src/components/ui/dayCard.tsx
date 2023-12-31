import day2 from "@/../public/day2.gif";
import Image from "next/image";

export default function DayCard({ data: { description, icon, temp } }: {
    data: {
        description: any;
        icon: any;
        temp: any;
    }
}) {
    return (
        <div className="white_card relative rounded-3xl col-span-2 md:aspect-auto overflow-hidden">
            <div className="w-full h-full absolute top-0 left-0 p-8 z-10">
                <div className="flex items-center -mb-2">
                    <h2 className="font-bold text-md md:text-l lg:text-3xl">
                        {temp} °C
                    </h2>
                    <Image src={`https://openweathermap.org/img/wn/${icon}@2x.png`} width={50} height={50} className="w-12 h-12 ml-2" alt="" loading="lazy" />
                </div>
                <p className="font-medium text-xs lg:text-sm md:w-4/5 lg:w-5/6 lg:mt-4">
                    {description.toUpperCase()}
                </p>
                <p className="font-medium text-xs lg:text-sm md:w-4/5 lg:w-5/6 lg:mt-4">
                    BOGOTA - COLOMBIA
                </p>
            </div>
            <div className="w-full h-full bg-[#1c053a9c] dark:bg-[#af72ff56] absolute">
            <div className="sun"></div>
                <Image src={day2} className="w-full h-full object-cover opacity-60" alt="" loading="lazy" />
            </div>
        </div>
    );
}