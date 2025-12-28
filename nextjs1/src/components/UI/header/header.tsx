"use client"

import Link from "next/link";

export default function Header() {
  return (
    <>
    <header className="w-full mb-20 bg-black-800  grid grid-cols-2 gap-4 font-grotesk-mono" >
        <div className=" mx-auto flex items-end justify-end py-4 px-6 gap-10">
            <div className="text-3xl flex gap-10 items-end">
                <span className="text-gradient-mrnet text-7xl font-medium font-notch">
                    <Link href="/">
                    mrnet
                    </Link>
                </span>
            </div>
            
            <a href="tel:+78006003538"
                className="text-cyan-400 hover:text-cyan-300 transition flex items-end">
                +7 (800) 600-35-38
            </a>
        </div>
        
        <div className="flex items-end gap-10 uppercase tracking-wider text-sm py-4 px-6">
          
            <Link href="/technology" className="hover:text-gray-300 transition">
                Технология
            </Link> 

            <a className="hover:text-gray-300 transition">Платформа управления</a>
            <a className="hover:text-gray-300 transition">Тест-драйв</a>
            <a className="hover:text-gray-300 transition">Наша сеть</a>
            <a className="text-cyan-400 hover:text-cyan-300 transition">Оставить заявку</a>
        </div>
    </header>
    
    </>
  );
}
