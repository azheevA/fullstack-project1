'use client';

import { useState, FormEvent } from 'react';
import Button from './UI/button';
import {createRegistration} from '../app/server/data.service';
import { IMaskInput } from 'react-imask';
interface FormData {
  name: string;
  contacts: string;
  phone: string;
  telegram: string;
  consent: boolean;
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contacts: '',
    phone: '',
    telegram: '',
    consent: false,
  });

  const [phoneInput, setPhoneInput] = useState('+7 ');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formatPhoneNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    
    if (!numbers) return '+7 ';
    
    let formatted = '+7 ';
    
    if (numbers.length > 1) {
      formatted += `(${numbers.substring(1, 4)}`;
    }
    if (numbers.length >= 4) {
      formatted += `)${numbers.substring(4, 7)}`;
    }
    if (numbers.length >= 7) {
      formatted += `-${numbers.substring(7, 9)}`;
    }
    if (numbers.length >= 9) {
      formatted += `-${numbers.substring(9, 11)}`;
    }
    
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneInput(value);
    
    const phoneNumbers = value.replace(/\D/g, '');
    setFormData(prev => ({
      ...prev,
      phone: phoneNumbers
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.consent) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }
    setIsSubmitting(true);
    
    try {
      await createRegistration(formData);
        alert('Форма успешно отправлена!');
       
        setFormData({
          name: '',
          contacts: '',
          phone: '',
          telegram: '',
          consent: false,
        });
        setPhoneInput('+7 ');
      
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      alert('Произошла ошибка при отправке формы');
    } finally {
     setIsSubmitting(false);
    }
  };

  return (
    <div className=" flex w-full ">
      <div className="bg-white w-full rounded-2xl shadow-lg overflow-hidden border border-[#00E4F0] bg-section3 py-6">
        
          <h1 className="text-5xs font-light text-white text-center my-6 uppercase">
            УСЛУГА ДОСТУПНА ТОЛЬКО ДЛЯ ЮРИДИЧЕСКИХ ЛИЦ
          </h1>
    

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="
                w-full  px-6 py-3 rounded-full 
                bg-black text-white text-lg tracking-[0.2em]
                border-2 border-cyan-500/80
                shadow-[0_0_15px_rgba(6,182,212,0.4)]
                outline-none focus:border-cyan-400 
                focus:shadow-[0_0_25px_rgba(34,211,238,0.6)]
                transition-all duration-300
                "
              required
              placeholder="Ваше имя *"
            />
          </div>

          

          <div>
            <label className="block text-3xs font-medium  my-4">
              Оставьте ваши контакты
            </label>
            {/* <input
              type="tel"
              value={phoneInput}
              onChange={handlePhoneChange}
              className="w-full bg-black px-3 py-2 border border-black- rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              pattern="\+7\s\(\d{3}\)\d{3}-\d{2}-\d{2}"
              placeholder="Ваш телефон +7 (__)___-__-__ *"
            /> */}
            <IMaskInput
              mask="+{7} (000) 000-00-00"
              definitions={{
                '#': /[1-9]/,
              }}
              value={phoneInput}
              lazy={false} 
              placeholderChar="_"
              className="
                w-full  px-6 py-3 rounded-full 
                bg-black text-white text-lg tracking-[0.2em]
                border-2 border-cyan-500/80
                shadow-[0_0_15px_rgba(6,182,212,0.4)]
                outline-none focus:border-cyan-400 
                focus:shadow-[0_0_25px_rgba(34,211,238,0.6)]
                transition-all duration-300
              "
              id="phone"
              unmask={true} // если true, в onAccept придет число без маски
              onAccept={(value, mask) => console.log(value)} // обработка ввода
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-black- mb-1">
              Ваш никнейм в telegram
            </label>
            <input
              type="text"
              value={formData.telegram}
              onChange={(e) => setFormData({...formData, telegram: e.target.value})}
              className="
                w-full  px-6 py-3 rounded-full 
                bg-black text-white text-lg tracking-[0.2em]
                border-2 border-cyan-500/80
                shadow-[0_0_15px_rgba(6,182,212,0.4)]
                outline-none focus:border-cyan-400 
                focus:shadow-[0_0_25px_rgba(34,211,238,0.6)]
                transition-all duration-300
               "
              placeholder="@username"
            />
          </div>

          
          <div className="space-y-2">
            <div className="flex items-start">
              <input
              type="checkbox"
              id="privacy"
              className="mt-1 w-4 h-4 accent-brand-cyan border-brand-cyan bg-black "
              required
            />
              <label htmlFor="privacy" className=" ml-2 text-[10px] md:text-xs text-gray-400 leading-relaxed">
              Я даю <a href="#" className="underline hover:text-white">согласие</a> на обработку моих персональных данных в форме обращения на странице сайта. Ознакомиться с условиями 
              <br /><a href="#" className="underline hover:text-white ml-1">Политики обработки персональных данных ООО «НЬЮКОМ ДИСТРИБЬЮШН»</a>
              </label>
            </div>
            
            <p className="text-xs text-black-500">
              * Поля, обязательные для заполнения
            </p>
          </div>

          
          <Button 
            variant='rainbow'
            type="submit"
            className="  text-white font-semibold py-3 px-6 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            НАЧАТЬ!
          </Button>
        </form>
      </div>
    </div>
  );
}