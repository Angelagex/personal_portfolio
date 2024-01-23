'use client'

import globe from "vanta/dist/vanta.globe.min"
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

export default function VantaBackground({ theme }: { theme: string }) {

  // Here comes Vanta React Hook code
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);
  const [sBrowser, setSBrowser] = useState<String>()

  useEffect(() => {
    let color = theme == 'light' ? 0xf06dc1 : 0xff3f81
    let bg = theme == 'light' ? 0xedede9 : 0x1c1c1c
    if (vantaEffect) vantaEffect.destroy()
    if (!vantaEffect) {
      setVantaEffect(
        globe({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: color,
          backgroundColor: bg,
          points: 6.00,
          maxDistance: 21.00,
          spacing: 20.00,
          showDots: true
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const sUsrAg = navigator.userAgent;      
      if (sUsrAg.indexOf("Chrome") > -1) {
        setSBrowser("Google Chrome");
        
      } else if (sUsrAg.indexOf("Safari") > -1) {        
        setSBrowser("Apple Safari");
      } else if (sUsrAg.indexOf("Opera") > -1) {
        setSBrowser("Opera");
      } else if (sUsrAg.indexOf("Firefox") > -1) {
        setSBrowser("Mozilla Firefox");
      } else if (sUsrAg.indexOf("MSIE") > -1) {
        setSBrowser("Microsoft Internet Explorer");
      }
    }
  }, [sBrowser])

  return (
    <div className={`${sBrowser == "Apple Safari" ? "hidden" : ""} fixed h-[90%] xxs:h-full w-full top-0 left-0 object-center object-cover -z-[100] vanta-bg`} ref={vantaRef}></div>
  )
}