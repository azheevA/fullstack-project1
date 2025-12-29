import React from 'react'
import Image from 'next/image'
export default function Section8() {
  return (
    <div className='flex flex-col w-full p-20'>  
      <Image
        src="/images/russia.PNG"
        width={1200}
        height={400}
        alt="russia"
        className=" w-full mb-20 rounded-lg border-2 border-[#FF4C00]"
      />
      <div className='grid grid-cols-2 gap-15 mx-auto'>
        <div className='flex flex-row items-center gap-5'>
          <div className='h-4 w-4 bg-orange-500 rotate-45'></div>
          <p className='text-lg'>
            Наши клиенты
          </p>
        </div>
        <div className='flex flex-row items-center gap-5'>
          <div className='h-4 w-4 bg-white '></div>
          <p className='text-lg'>
            Отделы продаж
          </p>
        </div>
      </div>
    </div>
  )
}
