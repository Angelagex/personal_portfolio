import { ThemeToggle } from "../ui/theme-toggle";

export default function DarkModeCard() {
    return (
        <div className="purple_mix_card col-span-1 relative rounded-3xl flex aspect-square">
            <ThemeToggle />
        </div>
    );
}