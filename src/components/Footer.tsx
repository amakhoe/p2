import logo from "@/assets/images/logosaas.png"
import Image from "next/image";
import Socialx from '@/assets/icons/x.svg'
import Linkdin from "@/assets/icons/linkedin.svg"
import Insta from '@/assets/icons/insta.svg'
import Youtube from '@/assets/icons/youtube.svg'
export const Footer = () => {
  return (
    <footer className='bg-black text-[#bcbcbc] text-sm py-5 border-t border-white/20'>
      <div className='container'>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
      <p>&copy; 2025 Kars Design, Inc. All Right</p>
      
        <div className='flex justify-center gap-2.5'>
          <Socialx alt="social x" />
          <Linkdin alt="linkdin"/>
          <Youtube alt="youtube" />
          <Insta alt="Insta"/>
        </div>
        </div>
        </div>
    </footer>
  )
};
