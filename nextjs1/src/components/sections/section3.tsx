"use client"
import Image from 'next/image'
import React from 'react';
export default function Section3() {
    const groupImage = [1, 2, 3, 4, 5, 6, 7];
    
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const [isMouseDown, setIsMouseDown] = React.useState(false);
    const [startX, setStartX] = React.useState(0);
    const [scrollLeft, setScrollLeft] = React.useState(0);
    
    const onMouseDown = (e: React.MouseEvent) => {
      setIsMouseDown(true);
      setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
      setScrollLeft(scrollRef.current?.scrollLeft || 0);
    }
    const onMouseLeave = () => {
      setIsMouseDown(false);
    }
    const onMouseUp = () => {
      setIsMouseDown(false);
    }
    const onMouseMove = (e: React.MouseEvent) => {
      if (!isMouseDown) return;
      e.preventDefault();
        const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollLeft - walk;
        }
    }
  return (
   <section className='w-full px-20 select-none'>
    <h1 className="text-5xl uppercase  mt-20 mb-10">500+ клиентов уже с нами</h1>
    <div 
        className={`
            flex overflow-x-auto gap-10 px-20
            [&::-webkit-scrollbar]:hidden 
            [scrollbar-width:none] 
            ${isMouseDown ? 'cursor-grabbing' : 'cursor-grab'}
            `}
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
    >
           {groupImage.map((i, index) => (
            <div key={index} className='flex-shrink-0 pointer-events-none select-none items-center'>
             <Image
               key={i}
               src={`/svg/svg-group1/${i}.svg`}
               width={220}
               height={80}
               alt="client"
               draggable={false}
             />
             </div>
           ))}
         </div>
   </section>
        
  )
}
