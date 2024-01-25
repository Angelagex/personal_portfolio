import Image from "next/image";
import { getDiscordStatus } from "@/lib/data";
import { BsRecordCircleFill, } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";
import { RiMoonFill } from "react-icons/ri";
import { WiMoonAltNew } from "react-icons/wi";
import discord_pp from "@/../public/discord_pp.webp"



export default async function DiscordCard({ theme }: { theme: string }) {
    const status: string = await getDiscordStatus()
    const icon = status == "offline" ?
        <BsRecordCircleFill className="-ml-3 bg-[#222528] border-4 border-[#222528] rounded-full" />
        : status == "idle" ?
            <RiMoonFill className="text-[#f1b233] -scale-x-100 -ml-3 bg-[#222528] border-4 border-[#222528] rounded-full" />
            : status == "dnd" ?
                <FaMinusCircle className="text-[#f23e42] -ml-3 bg-[#222528] border-4 border-[#222528] rounded-full" />
                :
                <WiMoonAltNew className="text-[#23a45b] text-sm sm:text-xl -ml-3 bg-[#222528] border-2 sm:border-4 border-[#222528] rounded-full" />

    return (
        <a href="https://discord.com/users/448913483833147403" target="_blank" className={`${theme == "dark" ? status + "_card" : status + "_card_light grain"} col-span-1 relative rounded-3xl flex justify-center aspect-square`}>
            <div className="w-full h-full flex items-center justify-center interactable z-20 -ml-2 sm:-ml-4">
                <div className="flex items-end">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 xl:w-14 xl:h-14 rounded-full overflow-hidden border-2 border-[#222528]">
                        <Image placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="src={discord_pp} alt="discord_pp" className="-mt-4 sm:-mt-6 xl:-mt-8" />
                    </div>
                    {icon}
                </div>

                <div className="font-bold text-xs sm:text-sm md:text-lg xl:text-xl">
                    {status == "dnd" ? "DO NOT DISTURB" : status.toUpperCase()}
                </div>
            </div>
            <a href="https://discord.com/users/448913483833147403" target="_blank" rel="noopener noreferrer">
                <Image src={"/openButton.svg"} width={20} height={20} alt="openButton" className="absolute top-4 right-4 w-4 sm:w-6 z-30" />
            </a>
            <div className="w-full h-full absolute">
                <Image placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="src={"/discord_no_bg.webp"} width={500} height={500} className="absolute bottom-2 right-2 w-8 xs:w-10 sm:w-14 opacity-40" alt="" loading="lazy" unoptimized={true}/>
            </div>
        </a>
    );
}