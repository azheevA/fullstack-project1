"use client"
import Image from 'next/image'
import Button from '../UI/button'
import { scrollToElement } from '@/utils/scrolltoElement'
export default function Section6() {
  return (
    <>
      <h1 className="my-14 mx-20 uppercase text-4xl">
        Настраивайте сеть и управляйте всеми <br /> 
        устройствами через единый личный кабинет
      </h1>

      <div className="px-20 flex flex-row w-full gap-10">
        <div className="flex flex-col flex-1 gap-5">
          <div className=" bg-section3 p-10 rounded-2xl h-1/2 border-[#00E4F0] border-2">
            <h1 className="text-3xl uppercase">Мониторинг</h1>
            <p className="mt-20">Графики потребления трафика
            <br />
            <br />Просмотр подключенных к мультироутеру сетевых устройств</p>
          </div>
          <div className=" bg-section3 p-10 rounded-2xl h-1/2 border-[#00E4F0] border-2">
            <h1 className="text-3xl uppercase">тонкая настройка</h1>
            <p className="mt-20">Настройка тоннелей PPTP, L2TP, GRE, IPIP
            <br />
            <br />Настройка пробросов портов</p>
          </div>
        </div>
        <Image src="/images/macbook.jpg" width={600} height={300} alt="mac" 
        className="flex-1 rounded-2xl border-2 hover:border-white"/>
      </div>
      <div className="flex w-screen mx-auto" onClick={()=>scrollToElement('registration-form')}>
        <Button variant="blue" className="flex mx-auto mt-20" >
        Испытать все возможности
        </Button>
      </div>
    </>
  )
}
