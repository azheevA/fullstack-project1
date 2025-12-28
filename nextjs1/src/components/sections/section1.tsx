import Image from 'next/image'
import Button from '../UI/button'
export default function Section1() {
  return (
    <div className="flex flex-row gap-5 mx-20 min-h-[300px]">
                <div className="bg-gradient-to-tr from-[#000000] via-[#000000] to-[#FF4C00] rounded-lg shadow-lg w-2/3  pb-6 border-[#FF4C00] border-2">
                  <div className="  text-center rounded-lg mt-6">
                    <h2 className="text-4xl md:text-6xl font-light uppercase leading-tight tracking-tight mb-4">
                        Беспроводной <br /> интернет для бизнеса
                    </h2>
                    <div className="space-y-1 mb-10">
                        <p className="text-xl md:text-2xl font-medium">
                            ОТ <span className="font-bold">2 990</span> РУБЛЕЙ* В МЕСЯЦ!
                        </p>
                        <p className="text-lg md:text-xl font-light tracking-wide uppercase">
                            Установка по любому адресу в РФ!
                        </p>
                    </div>

                    <Button variant='blue' size='lg'>
                        Попробовать
                    </Button>

                    <ul className="space-y-3 text-sm md:text-base font-light pt-8 px-10">
                        {[
                            "Мультироутер с технологией суммирования нескольких каналов связи в один",
                            "Высокая скорость и отказоустойчивость интернет-соединения",
                            "Единый договор на ПО, оборудование и связь",
                            "Простое подключение за 7 минут",
                            "Моментальная техподдержка 24/7 в Telegram"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                            <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                  </div>
                </div>
        <Image
            src="/images/image1.jpg"
            alt="Image 1"
            width={500}
            height={300}
            className="mx-auto  rounded-lg shadow-lg w-1/3 hover:border-[#FF4C00] border-2"
        />
                
    </div>
  )
}
