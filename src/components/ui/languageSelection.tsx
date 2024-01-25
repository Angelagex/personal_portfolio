'use client'

import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";


enum Languages {
    ENGLISH = "EN",
    SPANISH = "ES"
}

export default function LanguageSelection() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const locale = useLocale();

    const handleLanguage = (nextLocale: string) => {
        const params = new URLSearchParams(searchParams);
        replace(`${pathname}?${params.toString()}`, { locale: nextLocale.toLowerCase() });
    }
    
    function filterLanguage() {
        return Object.values(Languages).find( item => item.toLowerCase() != locale) as string 
    }

    return (
        <>
            <h3
            onClick={() => handleLanguage(filterLanguage())} 
            className="font-rampart-one text-5xl sm:text-[4.375rem] mt-2 sm:mt-6 mb-0 sm:mb-8 xl:mb-12 text-center xl:text-[6.375rem]">{locale.toUpperCase()}</h3>
            <div className="flex w-16 sm:w-20">
                {Object.entries(Languages).map(([key, value]) =>
                    <p className="font-raleway m-auto text-center  interactable z-20 text-lg xl:text-2xl" key={key} onClick={() => handleLanguage(value)}>{value}</p>
                )}
            </div>
        </>
    );
}