import Pointer from "@/components/ui/pointer";
import VantaBackground from "@/components/ui/vanta.component";
import { SearchParams } from "../page";
import Header from "@/components/projects/header";
import BashCard from "@/components/projects/bashCard";

export default function ({ searchParams }: SearchParams) {
    const language = searchParams.lang || "ES"
    const theme = searchParams.theme || "dark"

    return (
        <main>
            <Pointer />
            <VantaBackground key={theme} theme={theme} />
            <div className="grid gap-2 grid-cols-3 md:gap-4 my-5 container mx-auto xl:px-20">
                <Header />
                <BashCard />
                <div className={`white_card col-span-1 relative p-2 rounded-3xl flex flex-col justify-center aspect-square`}>
                </div>
                <div className={`white_card col-span-1 relative p-2 rounded-3xl flex flex-col justify-center aspect-square`}>
                </div>
                <div className={`white_card col-span-1 relative p-2 rounded-3xl flex flex-col justify-center aspect-square`}>
                </div>
            </div>
        </main>
    );
}