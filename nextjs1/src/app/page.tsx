import PagePagination from "@/components/pagination";
import RegistrationForm from "@/components/registration";
import Button from "@/components/UI/button";
import Footer from "@/components/UI/footer/footer";
import Image from "next/image";
import { getUsers } from "./server/data.service";
import GetList from "../components/getList";

const users = await getUsers();


export default async function Home() {
  const groupImage = [1, 2, 3, 4, 5, 6, 7];
  const initialData = await getUsers();
  return (  
    <>
      <div className="flex flex-row gap-5 mx-20 min-h-[300px]">
        <div className="bg-gradient-to-tr from-[#000] via-[#000] to-[#FF4C00] rounded-lg shadow-lg w-2/3  pb-6 border-[#FF4C00] border-2">
          <div className="text-center rounded-lg mt-20">
            <h1 className="text-5xl uppercase mb-6 tracking-tight">
              Беспроводной интернет для бизнеса
            </h1>
            <p className="text-4xl">
              от 2 990 рублей* в месяц!
              <br />
              Установка по любому адресу в РФ!
            </p>

            <ul className="flex flex-wrap justify-center gap-6 mt-6">
              <li>
                Мультироутер с технологией суммирования нескольких каналов связи
              </li>
              <li>Высокая скорость и отказоустойчивость соединения</li>
              <li>Простое подключение за 7 минут</li>
              <li>Моментальная техподдержка 24/7 в Telegram</li>
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


      <div className="flex flex-row gap-5 mx-20 p-4 mt-10 bg-section1 min-w-16 min-h-52">
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
      </div>

      <h1 className="text-5xl uppercase mt-10">500+ клиентов уже с нами</h1>

      <div className="grid grid-cols-7 gap-4">
        {groupImage.map((i) => (
          <Image
            key={i}
            src={`/svg/svg-group1/${i}.svg`}
            width={300}
            height={170}
            alt="client"
          />
        ))}
      </div>

      <h1 className="text-5xl uppercase mt-10 ">технология</h1>

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
          <div className="flex w-full justify-center items-center h-full">
            <Button className="flex items-center justify-center rounded-full">
            Узнать больше
          </Button>
          </div>
          
        </div>
      </div>

      <div className="flex w-full px-20 gap-10 mt-20 mb-3">
        <h1 className="uppercase text-4xl w-1/2">не балансируем</h1>
        <h1 className="uppercase text-4xl  w-1/2">а суммируем</h1>
      </div>

      <div className="flex w-full px-20 gap-10">
        <Image
          src="/images/group-image1/image1.jpg"
          width={600}
          height={400}
          alt="img1"
          className="w-1/2 rounded-lg"
        />
        <Image
          src="/images/group-image1/image2.jpg"
          width={600}
          height={400}
          alt="img2"
          className="w-1/2"
        />
      </div>

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
      <div className="flex w-screen mx-auto">
        <Button variant="blue" className="flex mx-auto mt-20">
        Испытать все возможности
      </Button>

      </div>
      
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
      
      
      
    <h1 className="my-14 mx-20 uppercase text-4xl">
       95% клиентов выбирают mrnet
    </h1>
      
    <PagePagination initialData={initialData}/>   



    <Image
      src="/images/russia.PNG"
      width={1200}
      height={400}
      alt="russia"
      className="w-2/3 mx-auto mb-20 rounded-lg border-2 border-[#FF4C00]"
    />  
      
    <div className=" flex flex-row mx-20 gap-4 ">
      <div className="w-1/3 text-5xl bg-section2-bg rounded-2xl py-5 px-3 text-black font-semibold flex justify-center items-center">
        <h1 className="w-full">Хотите узнать больше, рассчитать стоимость или забрать устройство на бесплатный тест?</h1>
      </div>
      <div className="w-2/3">
        <RegistrationForm/>
      </div>
    </div>

    <h1 className=" flex ml-4 mt-10 text-4xl  uppercase">Дефолтный подвал</h1>
    
    <Footer/>
      
    </>
  );
}
