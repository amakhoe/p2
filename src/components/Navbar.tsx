import Image from "next/image";
import logoImage from "@/assets/images/logosaas.png"
import Menu from "@/assets/icons/menu.svg"
export const Navbar = () => {
  return (
<header>
      
    <div>
      <div className="py-5 bg-black">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)] blur-md"></div>
          <Image src={logoImage} alt="Saas Logo" height={40} width={40} className="relative"/>
          </div>
          <Menu className="h-5 w-5 md:hidden rounded-lg opacity-30 text-white"/>
          <nav className="hidden md:flex gap-6 text-white items-center">
            <a href="">About</a>
            <a href="">About</a>
            <a href="">About</a>
            <a href="">About</a>
            <button className="-tracking-tighter bg-white text-black px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center">Get for Free</button>
          </nav>
          </div>
        </div>
      </div>
    </div>
    </header>
  )
};
