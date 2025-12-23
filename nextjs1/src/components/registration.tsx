'use client';

import { useState, FormEvent } from 'react';
import Button from './UI/button';

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

    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Форма успешно отправлена!');
       
        setFormData({
          name: '',
          contacts: '',
          phone: '',
          telegram: '',
          consent: false,
        });
        setPhoneInput('+7 ');
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      alert('Произошла ошибка при отправке формы');
    }
  };

  return (
    <div className=" flex w-full  mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#00E4F0] bg-gradient-to-tr from-[#000000] to-[#00E4F0] py-6">
        
          <h2 className="text-lg font-bold text-white text-center">
            УСЛУГА ДОСТУПНА ТОЛЬКО ДЛЯ ЮРИДИЧЕСКИХ ЛИЦ
          </h2>
    

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Ваше имя *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 border border-black-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Иванов Иван Иванович"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black- mb-1">
              Оставьте ваши контакты
            </label>
            <textarea
              value={formData.contacts}
              onChange={(e) => setFormData({...formData, contacts: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={2}
              placeholder="example@email.com, дополнительный телефон..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black- mb-1">
              Ваш телефон +7 (__)___-__-__ *
            </label>
            <input
              type="tel"
              value={phoneInput}
              onChange={handlePhoneChange}
              className="w-full px-3 py-2 border border-black- rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              pattern="\+7\s\(\d{3}\)\d{3}-\d{2}-\d{2}"
              placeholder="+7 (___) ___-__-__"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="@username"
            />
          </div>

          
          <div className="space-y-2">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                className="h-4 w-4 mt-1 text-blue-600 rounded focus:ring-blue-500"
                required
              />
              <label htmlFor="consent" className="ml-2 text-sm text-[#B0B0B0]">
                Я даю согласие на обработку моих персональных данных в форме обращения на странице сайта. 
                Ознакомиться с условиями{' '}
                <a 
                  href="#" 
                  className="text-[#B0B0B0] hover:text-[#B0B0B0] underline"
                  onClick={(e) => e.preventDefault()}
                >
                  Политики обработки персональных данных ООО «НЫОКОМ ДИСТРИБЬЮШН»
                </a>
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