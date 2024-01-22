import Pointer from "@/components/ui/pointer";
import VantaBackground from "@/components/ui/vanta.component";
import { SearchParams } from "../page";
import Header from "@/components/projects/header";
import BashCard from "@/components/projects/bashCard";
import DesignPatternsCard from "@/components/projects/designPatternsCard";
import PokeStoreCard from "@/components/projects/pokeStoreCard";
import PortfolioCard from "@/components/projects/portfolioCard";
import { useTranslations } from "next-intl";

export default function Porjects({ searchParams }: SearchParams) {
    const theme = searchParams.theme || "dark"
    const tBash = useTranslations('Bash');
    const tDesign = useTranslations('Design');
    const tPoke = useTranslations('Poke');
    const tPortfolio = useTranslations('Portfolio');
    const tProjects = useTranslations('ProjectsPage');

    return (
        <main>
            <Pointer />
            <VantaBackground key={theme} theme={theme} />
            <Header theme={theme} title={tProjects("title")} />
            <div className="grid gap-2 grid-cols-3 grid-rows-4 md:gap-4 my-5 container mx-auto xl:px-20 relative z-20 md:px-0 p-2">
                <BashCard theme={theme} title={tBash("title")} content={tBash.rich("content", {
                    under: (chunks) => <p className="customUnderline2 inline">{chunks}</p>
                })} />
                <DesignPatternsCard theme={theme} title={tDesign("title")} content={tDesign.rich("content", {
                    under: (chunks) => <p className="customUnderline2 inline">{chunks}</p>
                })} />
                <PokeStoreCard theme={theme} title={tPoke("title")} content={tPoke.rich("content", {
                    under: (chunks) => <p className="customUnderline2 inline">{chunks}</p>
                })} />
                <PortfolioCard theme={theme} title={tPortfolio("title")} content={tPortfolio.rich("content", {
                    under: (chunks) => <p className="customUnderline2 inline">{chunks}</p>
                })} />
                <div className={`opacity-0 white_card col-span-1 relative p-2 rounded-3xl flex flex-col justify-center aspect-square`}>
                </div>
            </div>
        </main>
    );
}