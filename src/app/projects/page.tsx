import Pointer from "@/components/ui/pointer";
import VantaBackground from "@/components/ui/vanta.component";
import { SearchParams } from "../page";
import Header from "@/components/projects/header";
import BashCard from "@/components/projects/bashCard";
import DesignPatternsCard from "@/components/projects/designPatternsCard";
import PokeStoreCard from "@/components/projects/pokeStoreCard";
import PortfolioCard from "@/components/projects/portfolioCard";

export default function ({ searchParams }: SearchParams) {
    const language = searchParams.lang || "ES"
    const theme = searchParams.theme || "dark"

    return (
        <main>
            <Pointer />
            <VantaBackground key={theme} theme={theme} />
            <Header />
            <div className="grid gap-2 grid-cols-3 grid-rows-4 md:gap-4 my-5 container mx-auto xl:px-20">
                <BashCard />
                <DesignPatternsCard />
                <PokeStoreCard />
                <PortfolioCard />
                <div className={`opacity-0 white_card col-span-1 relative p-2 rounded-3xl flex flex-col justify-center aspect-square`}>
                </div>
            </div>
        </main>
    );
}