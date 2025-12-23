"use client";
import { useEffect, useRef, useState } from "react";
interface IData {
  _id: string;
  name: string;
  profession: string;
  description: string;
}

export default function GetList({ users }: { users: IData[] }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isOverflowed, setIsOverflowed] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current) {
        setIsOverflowed(textRef.current.scrollHeight > textRef.current.clientHeight);
      }    };

    checkOverflow();

    window.addEventListener("resize", checkOverflow);
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [
    users
  ]); 


  if (!users || users.length === 0) return <div>Нет данных для отображения</div>;

  return (
    <div className="flex flex-wrap justify-center  w-full">
      {users.map((item: IData) => (
        <div key={item._id} className="rounded-lg p-6 m-4 bg-section3 border-[#00E4F0] border-2 w-[45%]">
          <h2 className="text-2xl font-bold">{item.name}</h2>
          <h3 className="text-xl italic mb-4">{item.profession}</h3>
          <div className="relative">
            <div ref={textRef} className={`overflow-hidden ${isExpanded ? "h-auto" : "h-24"}`}>
              <p>{item.description}</p>
            </div>
            {isOverflowed && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="absolute bottom-[-25]  right-[-10] bg-gradient-to-t from-section3 to-transparent text-center py-2"
              >
                <div className="h-7 w-7 hover:bg-[#00E4F0] rounded-full flex items-center justify-center border-1 border-white">
                {isExpanded ?
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                  
                  </div>
                 : 
                 <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                  </div>
                 }
                 </div> 
              </button>
            )}
          </div>
      
        </div>
      ))}
    </div>
  );
}