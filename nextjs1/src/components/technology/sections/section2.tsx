import Image from 'next/image'
import index from 'swr'


export default function Section2() {
    
    const group = [1,2,3]
     const groupText= [
        'ПО «Бондинг» агрегирует несколько операторов связи в мультироутере',
        'ПО «Платформа управления сетевыми устройствами» в облаке обеспечивает мониторинг и управление ',
        'Агрегирование нескольких каналов и облачная платформа повышают отказоустойчивость интернета '
    ]
  return (
    <div>
        <div className="flex flex-col">
        <div className="w-full flex justify-start">
            <h1 className="uppercase text-4xl px-20 my-14">
                Принцип работы
            </h1>
        </div>
        <div className="w-full flex flex-row px-20 gap-10 ">
           {
           group.map((i, index) => (
                       <div key={index} className='flex flex-1 flex-col justify-center items-center border-2 border-[#FF4C00] rounded-lg p-5 mb-20'>
                        <Image
                          key={i}
                          src={`/images/group-image2/${i}.jpg`}
                          width={600}
                          height={400}
                          alt="client"
                          draggable={false}
                          className=' rounded-lg flex-1 bg-cover'
                        />
                        <h1 className='mt-10 text-2xl uppercase text-start px-4'>
                            {groupText[i-1]}
                        </h1>
                        </div>
            ))
            }
        </div>
        </div>
    </div>
  )
}
