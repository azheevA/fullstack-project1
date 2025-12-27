"use client";

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    telegram: '',
    agreed: false
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      {/* Основной контейнер с градиентным свечением */}
      <div className="relative w-full max-w-2xl p-8 rounded-[24px] bg-black border border-brand-cyan/20 shadow-[0_0_50px_-12px_rgba(0,242,255,0.3)]">
        
        <h2 className="text-white text-xl md:text-2xl font-light tracking-wider uppercase mb-8">
          Услуга доступна только для юридических лиц
        </h2>

        <form className="space-y-6">
          {/* Поле Имя */}
          <div className="relative">
            <input
              type="text"
              placeholder="Ваше имя *"
              className="w-full bg-black border border-brand-cyan/40 rounded-full py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
              required
            />
          </div>

          <div className="space-y-4">
            <p className="text-white text-sm ml-6">Оставьте ваши контакты</p>
            
            {/* Поле Телефон */}
            <input
              type="tel"
              placeholder="Ваш телефон +7 (___) ___-__-__ *"
              className="w-full bg-black border border-brand-cyan/40 rounded-full py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
              required
            />

            {/* Поле Telegram */}
            <input
              type="text"
              placeholder="Ваш ник в tg"
              className="w-full bg-black border border-brand-cyan/40 rounded-full py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan transition-colors"
            />
          </div>

          {/* Чекбокс */}
          <div className="flex items-start gap-3 px-2">
            <input
              type="checkbox"
              id="privacy"
              className="mt-1 w-4 h-4 accent-brand-cyan border-brand-cyan bg-black"
              required
            />
            <label htmlFor="privacy" className="text-[10px] md:text-xs text-gray-400 leading-relaxed">
              Я даю <a href="#" className="underline hover:text-white">согласие</a> на обработку моих персональных данных в форме обращения на странице сайта. Ознакомиться с условиями 
              <a href="#" className="underline hover:text-white ml-1">Политики обработки персональных данных ООО «НЬЮКОМ ДИСТРИБЬЮШН»</a>
            </label>
          </div>

          <p className="text-[10px] text-gray-500 ml-2">* Поля, обязательные для заполнения</p>

          {/* Кнопка с градиентом */}
          <button
            type="submit"
            className="w-full md:w-64 h-14 mt-4 bg-gradient-to-r from-[#00d2ff] via-[#9d50bb] to-[#ff4e00] rounded-full text-black font-bold text-lg hover:opacity-90 transition-opacity active:scale-[0.98]"
          >
            НАЧАТЬ!
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;