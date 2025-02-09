"use client"
import { useEffect, useRef } from "react";
import appScreen from "../assets/images/app-screen.png";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
export const ProductShowcase = () => {
    const appImage = useRef<HTMLImageElement>(null);
    const {scrollYProgress} = useScroll({
      target: appImage,
      offset: ["start end", "end end"]
    })
    useEffect(() => {
      scrollYProgress.on("change", (latestValue) => 
        console.log("latestValue", latestValue)
      );
    }, [])
    const rotateX = useTransform(scrollYProgress, [0,1],[15,0]);
    const opacityY = useTransform(scrollYProgress, [0,1],[.5,1]);
  return (
    

<section className="bg-black text-white bg-gradient-to-b from-black to-[#5d2ca8] py-[72px] sm:py-2 overflow-x-clip">
<div className="container">
  <div className="mx-auto max-w-[540px]">
    <div className="flex justify-center">
  <div className="tag">Boost your productivity</div>
  </div>
  <h2 className="text-3xl md:text-[54] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-white to-[#68d6d6] text-transparent bg-clip-text">
    A more effective way to track progress</h2>
  <p className="text-center text-[22px] leading-[30px] tracking-tight text-">
  Celebrate the joy of accomplishment with an app designed to track your progress, motivate
  your efforts, and celebrate your successes, one track at a time.</p>
  </div>
  <div className="relative">
  <motion.div 
        style={{
          opacity: opacityY,
          rotateX: rotateX,
          transformPerspective: "800px"
        }}>
        <Image src={appScreen} 
        alt="App design"
        className="mt-14"
        ref={appImage}/>
        </motion.div>
</div>
</div>
</section>
  )
};
