import RegistrationForm from '@/components/registration'
import Section1 from '@/components/technology/section/section1'
import React from 'react'

export default function Techology() {
  return (
    <>  
        <Section1/>
        <div className="w-full flex flex-row px-20 gap-4">
            <div className="w-1/3 text-5xl bg-section2-bg rounded-2xl py-5 px-3 text-black font-semibold flex justify-center items-center">
                <h1 className="w-full">Хотите узнать больше, рассчитать стоимость или забрать устройство на бесплатный тест?</h1>
            </div>    
            <div className="w-2/3">
                <RegistrationForm/>
            </div>
        </div>    
    </>
  )
}
