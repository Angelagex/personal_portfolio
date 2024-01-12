import Image from "next/image";
import discord_no_bg from "@/../public/discord_no_bg.gif";
import openButton from "@/../public/openButton.svg";
import discord_pp from "@/../public/discord_pp.png";
import { getDiscordStatus } from "@/lib/data";
import { BsRecordCircleFill, } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";
import { RiMoonFill } from "react-icons/ri";
import { WiMoonAltNew } from "react-icons/wi";





export default async function DiscordCard({ theme }: { theme: string }) {
    const status: string = await getDiscordStatus()
    const icon = status == "offline" ?
        <BsRecordCircleFill className="-ml-3 bg-[#222528] border-4 border-[#222528] rounded-full" />
        : status == "idle" ?
            <RiMoonFill className="text-[#f1b233] -scale-x-100 -ml-3 bg-[#222528] border-4 border-[#222528] rounded-full" />
            : status == "dnd" ?
                <FaMinusCircle className="text-[#f23e42] -ml-3 bg-[#222528] border-4 border-[#222528] rounded-full" />
                :
                <WiMoonAltNew className="text-[#23a45b] -ml-3 bg-[#222528] border-4 border-[#222528] rounded-full" />

    return (
        <div className={`${status + "_card"} col-span-1 relative rounded-3xl flex justify-center aspect-square`}>
            <div className="w-full h-full flex items-center justify-center">
                <div className="flex items-end">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#222528]">
                        <Image src={discord_pp} alt="discord_pp" className="-mt-6" />
                    </div>
                    {icon}
                </div>


                <h2 className="font-bold text-sm md:text-l lg:text-l">
                    {status == "dnd" ? "DO NOT DISTURB" : status.toUpperCase()}
                </h2>
            </div>
            <a href="https://discord.com/users/448913483833147403" target="_blank" rel="noopener noreferrer">
                <Image src={openButton} alt="openButton" className="absolute top-4 right-4 w-6 z-30" />
            </a>
            <div className="w-full h-full absolute">
                <Image src={discord_no_bg} className="absolute bottom-2 right-2 w-14 opacity-40" alt="" loading="lazy" />
            </div>
        </div>
    );
}