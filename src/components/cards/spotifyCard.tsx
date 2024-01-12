import openButton from "@/../public/openButton.svg";
import spotify from "@/../public/spotify.gif";
import spotifyMood from "@/../public/spotifyMood.gif";
import { getSpotifyInfo } from "@/lib/data";
import Image from "next/image";
import { BsSpotify } from "react-icons/bs";
import AudioPlayer from "../ui/audioPlayer";

export default async function SpotifyCard({ theme }: { theme: string }) {
  const data = await getSpotifyInfo()
  return (
    <div className="white_card rounded-3xl col-span-2 overflow-hidden p-4 pt-6 pl-12 lg:p-12 lg:pl-20">

      <a
        href={data?.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Spotify"
      >
        <Image src={spotify} alt="spotifyIcon" className="-z-1 absolute -top-1 -left-8 w-32 lg:top-8 lg:-left-4" />
      </a>
      <p className="text-[#ffffff] font-bold text-lg lg:text-xl md:text-lg">
        Escuchado Recientemente
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
        <Image src={spotifyMood} alt="spotifyIcon" className="-z-1 absolute bottom-0 right-0 w-28" />
      </a>

      <Image
        src={data?.album.images[0].url || ""}
        alt={data?.name || "Song coverpage"}
        width={data?.album.images[0].width}
        height={data?.album.images[0].height}
        className={"absolute top-0 left-0 object-center object-cover -z-[1000] opacity-40"}
        loading="lazy"
      />
    </div >
  );
}