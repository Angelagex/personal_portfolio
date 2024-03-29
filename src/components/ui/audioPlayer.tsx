'use client'

import { useState } from "react";
import { IoPlayCircle, IoPauseCircle } from "react-icons/io5";


export default function AudioPlayer({url}: {url: string}) {
    const [animation, setAnimation] = useState("pause");
    const [audio] = useState<HTMLAudioElement | null>(typeof Audio !== 'undefined' ? new Audio(url) : null)
    audio?.addEventListener("ended", () => {
        setAnimation("pause")
    })

    const handlePlay = () => {
        setAnimation("play")
        audio?.play()
    }

    const handlePause = () => {
        setAnimation("pause")
        audio?.pause()
    }
    
    return (
        <div className="flex items-center relative z-20 interactable">
            {animation == "play" 
            ? <IoPauseCircle onClick={handlePause} className="xl:w-12 xl:h-12 w-8 h-8"/> 
            : <IoPlayCircle onClick={handlePlay} className="xl:w-12 xl:h-12 w-8 h-8"/>}
            <div className="xl:w-14 xl:h-10 w-10 h-8 ml-2 relative inline-flex items-center justify-between">
                <div className={`bar ${animation}`}></div>
                <div className={`bar ${animation}`}></div>
                <div className={`bar ${animation}`}></div>
                <div className={`bar ${animation}`}></div>
                <div className={`bar ${animation}`}></div>
                <div className={`bar ${animation}`}></div>
                <div className={`bar ${animation}`}></div>
                <div className={`bar ${animation}`}></div>
                <div className={`bar ${animation}`}></div>
                <div className={`bar ${animation}`}></div>
            </div>
        </div>

    );
}