import React from 'react'
import Image from 'next/image'
export default function Section2() {
  return (
    <div className="flex flex-row gap-5 mx-20 p-4 mt-10 bg-section1 min-w-16 min-h-52 relative">
      <div className="rounded-xl bg-section3 flex-1 p-8 border-[#00E4F0] border-2">
        <Image src="/svg/wifi.svg" width={80} height={60} alt="wifi" />
        <p className=" mt-10 text-xl mb-5 uppercase">надежный и быстрый <br /> интернет, который не падает</p>
      </div>
    
      <div className="rounded-xl bg-section3 flex-1 p-8 border-[#00E4F0] border-2">
        <Image src="/svg/toggle.svg" width={105} height={60} alt="toggle" />
        <p className=" mt-10 text-xl mb-5 uppercase">КОНТРОЛЬ ВСЕЙ СЕТИ ЧЕРЕЗ <br />ГИБКУЮ НАСТРОЙКУ</p>
      </div>
    
      <div className="rounded-xl bg-section3 flex-1 p-8 border-[#00E4F0] border-2">
        <Image src="/svg/allside.svg" width={60} height={60} alt="allside" />
        <p className=" mt-10 text-xl mb-5 uppercase">Единый инструмент <br /> для масштабирования <br />по всей стране</p>
      </div>
      <div className='border border-white bg-gray-500 rounded-full p-3 absolute bottom-4 right-10 translate-y-1/2 flex items-center justify-center cursor-pointer'>
        <span className="material-symbols-outlined">
          call
        </span>
      </div>      
    </div>
  )
}
