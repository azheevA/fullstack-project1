"use client"
import Image from "next/image";
export default function Header() {
  return (
    <>
    <header className="w-full p-4 bg-black-800  grid grid-cols-2 gap-4 font-grotesk-mono" >
        <div className=" mx-auto flex items-center justify-end py-4 px-6">
            <div className="text-3xl font-bold flex gap-10 items-end">
                
                <span className="text-gradient-mrnet text-6xl">mrnet</span>
            </div>
            <Image 
            src="/images/mrnet.png" 
            height={185} 
            width={41.26}  
            alt="mrnet logo"
            className="mx-auto object-contain"
        />
            <a href="tel:+78006003538"
                className="text-cyan-400 hover:text-cyan-300 transition">
                +7 (800) 600-35-38
            </a>
        </div>
        
        <div className="flex items-center gap-10 uppercase tracking-wider text-sm">
            <a className="hover:text-gray-300 transition">Технология</a>
            <a className="hover:text-gray-300 transition">Платформа управления</a>
            <a className="hover:text-gray-300 transition">Тест-драйв</a>
            <a className="hover:text-gray-300 transition">Наша сеть</a>
            <a className="text-cyan-400 hover:text-cyan-300 transition">Оставить заявку</a>
        </div>
    </header>
    
    </>
  );
}
