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
        <div className="flex items-center z-20">
            {animation == "play" 
            ? <IoPauseCircle onClick={handlePause} className="w-8 h-8"/> 
            : <IoPlayCircle onClick={handlePlay} className="w-8 h-8"/>}
            <div className="w-10 h-8 ml-2 relative inline-flex items-center justify-between">
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