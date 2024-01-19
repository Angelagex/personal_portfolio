import { getSpotifyInfo } from "@/lib/data";
import Image from "next/image";
import AudioPlayer from "../ui/audioPlayer"
import spotifyIcon from "@/../public/spotifyIcon.gif"

export default async function SpotifyCard({ theme, title }: { theme: string, title: string }) {
  const data = await getSpotifyInfo()
  return (
    <div className={`${theme == "dark" ? "white_card" : "white_card_light grain" } rounded-3xl col-span-2 row-span-1 overflow-hidden p-4 pt-6 pl-12 md:p-8 md:pl-[3.8rem] lg:p-12 lg:pl-20`}>
      <a
        href={data?.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Spotify"
      >
        <Image src={spotifyIcon} alt="spotifyIcon2" className="-z-1 absolute w-24 top-4 -left-4 md:-left-4 lg:top-10 lg:left-0 xl:top-8 xl:-left-4 lg:w-30 xl:w-36 interactable" />
      </a>
      <p className="text-[#ffffff] font-bold text-xs sm:text-lg md:text-lg lg:text-xl xl:text-2xl">
        {title}
      </p>
      <div className="flex mb-2 flex-col" >
        <p className="text-[#ffffff] w-full xl:text-lg lg:text-base text-xs font-semibold truncate">
          {data?.name}
        </p>
        <p className="text-[#ffffff] w-full xl:text-xl lg:text-lg text-xs truncate">
          {data?.artists.length > 1
            ? data?.artists.map(({ name }: { name: string }) => name).join(", ")
            : data?.artists[0].name}
        </p>
      </div>
      <AudioPlayer key={data?.preview_url} url={data?.preview_url} />
      <a
        href={data?.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Spotify"
      >
        <Image src={"spotifyMood.gif"} alt="spotifyIcon" className="interactable z-20 absolute bottom-0 right-0 w-28 xl:w-36" />
      </a>

      <Image
        src={data?.album.images[0].url || ""}
        alt={data?.name || "Song coverpage"}
        width={data?.album.images[0].width}
        height={data?.album.images[0].height}
        className={`absolute top-0 left-0 object-center object-cover w-full -z-[1000] ${theme == "dark" ? "opacity-40" : "opacity-60" }`}
        loading="lazy"
      />
    </div >
  );
}