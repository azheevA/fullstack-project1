import PagePagination from "@/components/pagination";
import RegistrationForm from "@/components/registration";
import { getUsers } from "./server/server";
import Section1 from "@/components/sections/section1";
import Section2 from "@/components/sections/section2";
import Section3 from "@/components/sections/section3";
import Section4 from "@/components/sections/section4";
import Section5 from "@/components/sections/section5";
import Section6 from "@/components/sections/section6";
import Section7 from "@/components/sections/section7";
import Section8 from "@/components/sections/Section8";
const users = await getUsers();


export default async function Home() {
  const initialData = await getUsers(1, 3);
  return (  
    <>
      <Section1 /> {/*компонент беспроводного интернета и картинки роутера*/}
      <Section2 /> {/*компонент с 3 компонентами с иконками и текстом*/}
      <Section3 /> {/*компонент с логотипами клиентов*/}
      <Section4 /> {/*компонент технология с картинкой и текстом и кнопкой*/}
      <Section5 /> {/*компонент с двумя заголовками и двумя картинками*/}
      <Section6 /> {/*компонент с мониторингом и настройками и картинкой макбука*/}
      <Section7 /> {/*компонент с тарифами*/}
      <h1 className="mb-2 mt-20 px-20 uppercase text-4xl">
        95% клиентов выбирают mrnet
      </h1>
        
      <PagePagination initialData={initialData}/>   

      <Section8 /> {/*компонент с картинкой России*/}

      <div className="w-full flex flex-row px-20 gap-4">
        <div className="w-1/3 text-5xl bg-section2-bg rounded-2xl py-5 px-3 text-black font-semibold flex justify-center items-center">
          <h1 className="w-full">Хотите узнать больше, рассчитать стоимость или забрать устройство на бесплатный тест?</h1>
        </div>
        <div className="w-2/3" id="registration-form">
          <RegistrationForm/>
        </div>
      </div>    
      
    </>
  );
}
