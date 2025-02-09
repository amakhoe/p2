"use client"
import Cursor from "@/assets/images/cursor.png"
import Msg from "@/assets/images/message.png"
import Arrow from "@/assets/icons/arrow-w.svg"
import Image from "next/image";
import {motion} from "framer-motion"
export const Hero = () => {
  return (
    <div className="relative overflow-clip sm:py-24 bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px]">
     <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] bg-[radial-gradient(closest-side,#000_82%,#9560eb)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
        <a href="" className="inline-flex gap-3 border py-1 px-1 rounded-lg border-white/30">
          <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">Versao 2.0 esta aqui</span>
          <span className="inline-flex items-center gap-1"> Ler mais <Arrow /></span>
        </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
        <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8 inline-flex">
          Uma tarefa <br/>de cada vez</h1>
          <motion.div drag //dragSnapToOrigin
          className="absolute right-[476px] top-[108px] hidden sm:inline">
          <Image src={Cursor} alt="Mensagem" 
          width={200}
          height={200}
          draggable="false"
          className="max-w-none"/>
          </motion.div>
          <motion.div drag //dragSnapToOrigin 
          className="absolute top-[58px] left-[500px] hidden sm:inline">
          <Image src={Msg} alt="Cursor"
          width={200}
          height={200} 
          draggable="false"
          className="max-w-none"
          />
          </motion.div>
          
          </div>
          </div>
          <div className="flex justify-center">
        <p className="text-center text-xl mt-8 max-w-md">
          Celebrata the joy of accomplishment with an app designed to track 
          progress, motivate your efforts, and celebrate your successes.
        </p>
        </div>
        <div className="flex justify-center mt-8">
        <button className="bg-white text-black py-3 px-5 rounded-lg">Get for free</button>
        </div>
      </div>
    </div>
  )
};
