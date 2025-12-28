export default function Footer() {
  return (
    <div className="flex flex-col relative p-10">
      <h1 className=" flex ml-4 m-10 text-2xl  uppercase">Дефолтный подвал</h1>
      <div className=" grid grid-cols-4 text-sm">
        <div className="space-y-12">
            <div className="space-y-1 text-gray-400">
              <p>ООО «Ньюком Дистрибьюшн»,</p>
              <p>ОГРН: 1207700420784,</p>
              <p>Юридический адрес: 119017, Российская</p>
              <p>Федерация, г. Москва,</p>
              <p>ул. Большая Ордынка, д. 54 стр. 2</p>
            </div>
            
            <div className="">
              <span className="text-gradient-mrnet text-5xl text-bold">mrnet</span>

              <p className="uppercase text-[10px] tracking-[0.2em] font-medium leading-tight">
                Категорически новый<br />интернет для бизнеса
              </p>
            </div>
          </div> 
      <div>
        <div className="space-y-10 text-gray-400">
            <div>
              <p>Почта: <a href="mailto:info@mrnet.ru" className="underline hover:text-white transition-colors">info@mrnet.ru</a></p>
              <p>График работы: по будням</p>
              <p>с 9:00 до 19:00 по Москве</p>
            </div>

            <div>
              <p className="mb-1">Служба поддержки:</p>
              <p>Тел: <a href="tel:+74953084151" className="underline hover:text-white transition-colors">8 (495) 308-41-51</a></p>
              <p>Тел: <a href="tel:+78006003538" className="underline hover:text-white transition-colors">8 (800) 600-35-38</a></p>
              <p>Почта: <a href="mailto:helpdesk@mrnet.ru" className="underline hover:text-white transition-colors">helpdesk@mrnet.ru</a></p>
              <p>График работы: 24/7</p>
            </div>

            <p className="pt-4">©2025 mrnet.ru Все права защищены</p>
          </div>
      </div>
      <div className="flex flex-col gap-8">
            <nav className="flex flex-col gap-2 underline text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
              <a href="#" className="hover:text-white transition-colors">Политика в отношении обработки персональных данных</a>
              <a href="#" className="hover:text-white transition-colors">Соглашение об обработке данных</a>
              <a href="#" className="hover:text-white transition-colors">Соглашение о порядке оказания услуг</a>
              <a href="#" className="hover:text-white transition-colors">Соглашение о технической поддержке</a>
              <a href="#" className="hover:text-white transition-colors">Требования по эксплуатации оборудования mrnet</a>
              <a href="#" className="hover:text-white transition-colors">Требования к серверным ресурсам для установки ПО</a>
            </nav>

            <nav className="flex flex-col gap-2 underline text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Инструкция по работе с личным кабинетом</a>
              <a href="#" className="hover:text-white transition-colors">Инструкция по эксплуатации мультироутера 04</a>
              <a href="#" className="hover:text-white transition-colors">Инструкция по эксплуатации мультироутера 05</a>
              <a href="#" className="hover:text-white transition-colors">Инструкция по эксплуатации мультироутера 06</a>
              <a href="#" className="hover:text-white transition-colors">Инструкция по эксплуатации мультироутера 07</a>
            </nav>
          </div>
    </div>
      
      <div className="h-64 w-3xs grid grid-cols-5 bg-gradient-to-tr from-[#FF4C00] via-[#AD85C8] to-[#00E4F0] border-none absolute bottom-0 right-0">
        <div className="w-full h-full bg-black "></div><div className="w-full h-full bg-black"></div><div className="w-full h-full bg-black"></div><div className="w-full h-full"></div><div className="w-full h-full bg-black"></div>
        <div className="w-full h-full bg-black"></div><div className="w-full h-full bg-black"></div><div className="w-full h-full"></div><div className="w-full h-full bg-black"></div><div className="w-full h-full bg-black"></div>
        <div className="w-full h-full bg-black"></div><div className="w-full h-full bg-black"></div><div className="w-full h-full"></div><div className="w-full h-full bg-black"></div><div className="w-full h-full bg-black"></div>
        <div className="w-full h-full"></div><div className="w-full h-full"></div><div className="w-full h-full bg-black"></div><div className="w-full h-full"></div><div className="w-full h-full"></div>
        <div className="w-full h-full"></div><div className="w-full h-full"></div><div className="w-full h-full bg-black"></div><div className="w-full h-full"></div><div className="w-full h-full"></div>
      </div>
      
    </div>
  )
}