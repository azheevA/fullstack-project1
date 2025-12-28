import React from 'react'
import Image from 'next/image'
import Button from '@/components/UI/button'
export default function Section1() {
  return (
    <>
        <div className='flex flex-row w-full px-20 my-10 gap-6'>
            <Image
                src="/technology/r06-side_dof25.jpg"
                alt='not found'
                width={300} height={140}
                className='flex-2  rounded-2xl'
            />
            <div className='flex-3  bg-section3 rounded-2xl px-10 py-5 border-2 border-black hover:border-white'>
                <h2 className='text-[28px] uppercase'>
                    РЕШЕНИЕ mrnet С 
                    ТЕХНОЛОГИЕЙ BONDING ОБЪЕДИНЯЕТ ВСЕ ДОСТУПНЫЕ КАНАЛЫ 
                    СВЯЗИ В ЕДИНЫЙ ВИРТУАЛЬНЫЙ КАНАЛ,
                     СУММИРУЕТ СКОРОСТЬ ПЕРЕДАЧИ ДАННЫХ И 
                     ПОВЫШАЕТ НАДЕЖНОСТЬ СОЕДИНЕНИЯ
                </h2>
                <Button 
                    variant='blue'
                    className='rounded-full m-20 px-12 py-3'
                >
                    Оставить зявку
                </Button>
                <p className='text-[18px]'>
                    Оставьте заявку и с вами свяжется менеджер и договорится о запуске пилота. 
                    Без необходимости отключения от текущего провайдера и заключения договора. 
                    Все цены рассчитываются индивидуально под клиента

                </p>
            </div>
        </div>
    </>
  )
}
