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
            <div className="w-full h-full absolute top-0 left-0 p-4 sm:p-8 xl:p-12 z-10">
                <div className="flex items-center -mb-2">
                    <h2 className="font-bold text-base sm:text-md md:text-l lg:text-3xl xl:text-4xl">
                        {temp} °C
                    </h2>
                    <Image placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="src={`https://openweathermap.org/img/wn/${icon}@2x.png`} width={50} height={50} className="w-12 h-12 ml-2" alt="" loading="lazy" />
                </div>
                <p className="font-medium text-[0.65rem] leading-3 sm:text-xs lg:text-sm xl:text-base md:w-4/5 lg:w-5/6 lg:mt-4 ">
                    {description.toUpperCase()}
                </p>
                <p className="font-medium text-[0.65rem] leading-3 sm:text-xs lg:text-sm xl:text-base md:w-4/5 lg:w-5/6 lg:mt-2">
                    BOGOTA - COLOMBIA
                </p>
            </div>
            <div className="w-full h-full bg-[#1c053a9c] dark:bg-[#af72ff56] absolute">
                <div className="sun"></div>
                <Image placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="src={"/day2.webp"} width={498}
                    height={280} className="w-full h-full object-cover opacity-60" alt="" loading="lazy" />
            </div>
        </div>
    );
}