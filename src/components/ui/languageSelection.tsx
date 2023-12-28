'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";

enum Languages {
    ENGLISH = "EN",
    SPANISH = "ES"
}

export default function LanguageSelection() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleLanguage = (language: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('lang', language);
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="flex w-20">
            {Object.entries(Languages).map(([key, value]) =>
                <p className="font-raleway m-auto text-center cursor-pointer" key={key} onClick={() => handleLanguage(value)}>{value}</p>
            )}
        </div>
    );
}