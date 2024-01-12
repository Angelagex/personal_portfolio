import { ThemeToggle } from "../ui/theme-toggle";

export default function DarkModeCard({ theme }: { theme: string }) {
    return (
        <div className={`${theme == "dark" ? "purple_mix_card" : "grain purple_mix_card_light" } col-span-1 relative rounded-3xl flex aspect-square`}>
            <ThemeToggle />
        </div>
    );
}