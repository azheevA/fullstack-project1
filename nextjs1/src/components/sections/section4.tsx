import Image from 'next/image'
import  Button  from '../UI/button'
import Link from 'next/link'
export default function Section4() {
  return (
    <>
        <h1 className="text-5xl uppercase w-full px-20 mb-10">технология</h1>
        <div className="flex flex-row mx-20 gap-10 ">
            <Image
                src="/images/image2.jpg"
                width={500}
                height={300}
                alt="tech"
                className="rounded-lg w-2/3 border-2"
            />
            <div className="rounded-lg shadow-lg bg-section1-bg w-1/3 p-10 text-2xl content-center border-[#FF4C00] border-2">
                <p>Прокачайте свой интернет 
                <br />  с высокоскоростными технологиями mrnet. 
                  <br />  Наш мультироутер суммирует несколько 
                <br />  каналов связи в один (технология бондинг), 
                <br />  значительно повышая устойчивость 
                <br />  и скорость соединения!</p>
                <div className="flex w-full justify-center items-center h-full relative">
                    <Button className="flex items-center justify-center rounded-full absolute bottom-[300] " >
                        <Link href="/technology">
                          Узнать больше
                        </Link>
                    </Button>
                </div>
                  
            </div>
        </div>           
    </>
  )
}
