import React from 'react'
import Image from 'next/image'
export default function Section7() {
  return (
    <>
      <h1 className="my-14 mx-20 uppercase text-4xl ">
        Решение, созданное айтишниками для айтишников
      </h1>

      <div className="flex flex-row w-full px-20 gap-10">
        <div className="rounded-2xl px-6 py-8 bg-section3 border-[#00E4F0] border-2 w-1/2">
          <h1 className="text-2xl uppercase mb-5">Ценим ваше время</h1>
          <p>Подключение за 7 минут. Plug'n'Play.</p>
        </div>

        <div className="rounded-2xl px-6 py-8 bg-section3 border-[#00E4F0] border-2  w-1/2">
          <h1 className="text-2xl uppercase mb-5">
            Безграничные возможности
          </h1>
          <p>Подключим интернет по любому адресу.</p>
        </div>

        <div className="rounded-2xl px-6 py-8 bg-section3 border-[#00E4F0] border-2  w-1/2">
          <h1 className="text-2xl uppercase mb-5">
            Оптимальные решения
          </h1>
          <p>Сделаем расчёт за 1 час.</p>
        </div>
      </div>
      <div className="flex flex-row w-full gap-5 mt-20 px-20">
        <div className="w-1/2 rounded-2xl bg-section2-bg py-14 px-10 ">
          <h1 className="text-5xl text-black uppercase">
            Попробуйте <br /> 14 дней бесплатно
          </h1>
          <p className="mt-40 text-black">
            Развивайте свою инфру с mrnet. Без лишних 
            <br />затрат и костылей. Высокоскоростной интернет — 
            <br />удобно, эффективно!
          </p>
        </div>
        <Image
          src="/images/R06-front.jpg"
          alt="not found"
          width={670} height={390}
          className="w-1/2 rounded-2xl"
        />

      </div>
    </>
  )
}
