'use client'

import { usePathname, useRouter } from "@/navigation";
import { useSearchParams } from "next/navigation";


enum Languages {
    ENGLISH = "EN",
    SPANISH = "ES"
}

export default function LanguageSelection() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleLanguage = (nextLocale: string) => {
        const params = new URLSearchParams(searchParams);
        replace(`${pathname}?${params.toString()}`, {locale: nextLocale.toLowerCase()});
    }

    return (
        <div className="flex w-20">
            {Object.entries(Languages).map(([key, value]) =>
                <p className="font-raleway m-auto text-center" key={key} onClick={() => handleLanguage(value)}>{value}</p>
            )}
        </div>
    );
}