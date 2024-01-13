'use client'
import { useRef } from "react";
import useMousePosition from "./mousePosition";

export default function Pointer() {
  const bigDot = useRef<HTMLDivElement>(null)
  const smallDot = useRef<HTMLDivElement>(null)
  const mousePosition = useMousePosition();
  const keyFrames = {
    transform: `translate(${(mousePosition.x || 0) - 20}px, ${(mousePosition.y || 0) - 20}px)`
  }
  const smallKeyFrames = {
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
  }
  bigDot.current?.animate(keyFrames, { duration: 1500, fill: 'forwards' })
  smallDot.current?.animate(smallKeyFrames, { duration: 0, fill: 'forwards' })

  function handleAnimationStart() {
    if (!bigDot.current?.classList.contains("colorActive")) {
      bigDot.current?.classList.add("colorActive");
    }
    if (bigDot.current?.classList.contains("colorNotActive")) {
      bigDot.current?.classList.remove("colorNotActive");
    }
  }
  function handleAnimationEnd() {
    if (bigDot.current?.classList.contains("colorActive")) {
      bigDot.current?.classList.remove("colorActive");
    }
    if (!bigDot.current?.classList.contains("colorNotActive")) {
      bigDot.current?.classList.add("colorNotActive");
    }
  }

  if (typeof document !== 'undefined') {
    const interactables = document.querySelectorAll('.interactable');
    interactables.forEach(element => {
      element.addEventListener('mouseover', () => handleAnimationStart())
      element.addEventListener('mouseout', () => handleAnimationEnd())
    })
  }

  /*
    //Previous implementation (it was generating lag)   
    const handleMouseMove = (e: MouseEvent) => {
      const element = (e.target as HTMLElement).closest('.interactable');
      if (element && !bigDot.current?.classList.contains("activeColor")) {
        bigDot.current?.classList.add("activeColor");      
      }
      else if (!element && bigDot.current?.classList.contains("activeColor")) {
        bigDot.current?.classList.remove("activeColor");
      }
    };
  
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
    } */

  return (
    <>
      <div className="pointer" ref={bigDot}></div>
      <div className="smallPointer" ref={smallDot}></div>
    </>
  );
}