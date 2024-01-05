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
  bigDot.current?.animate(keyFrames, { duration: 2000, fill: 'forwards' })
  smallDot.current?.animate(smallKeyFrames, { duration: 0, fill: 'forwards' })
  window.onmousemove = e => {
    const element = (e.target as HTMLElement).closest('.interactable')
    if (element) {
      console.log(element.className.includes('title'));
      console.log(element.clientWidth, element.className);
    }
  }
  return (
    <>
      <div className="pointer" ref={bigDot}></div>
      <div className="smallPointer" ref={smallDot}></div>
    </>
  );
}