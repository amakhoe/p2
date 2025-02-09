"use client"
import helixImage from "@/assets/images/helix2.png"
import emojiStar from "@/assets/images/emojistar.png"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0,1],[150, -150]);
  return (
    <div ref={sectionRef} className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative">
        <motion.img src={helixImage.src} alt="" className="absolute top-6 left-[calc(100%-36px)]" 
        style={{
            translateY,
           }}/>
           <motion.img src={emojiStar.src} alt="" className="absolute -top-[120px] right-[calc(100%-24px)]" 
        style={{
            translateY,
           }}/>
        <h2 className="font-bold text-5xl tracking-tighter">Get Instant Access</h2>
          <p className="text-xl text-white/70 mt-5">
            Fique atento as nossas novidades, faca o cadastro para receber novidades todas as semanas.
          </p>
          <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input type="email" placeholder="Email" className="h-12 bg-white/20 rounded-lg px-5 font-bold flex-1 placeholder-[#615274]"/>
          <button className="bg-white text-black rounded-lg h-12 px-5">Enviar</button>
          </form>
      </div>
    </div>
  )
};
