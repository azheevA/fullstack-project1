"use client";
import { useEffect, useRef, useState } from "react";

interface IData {
  _id: string;
  name: string;
  profession: string;
  description: string;
}

function UserCard({ item }: { item: IData }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isOverflowed, setIsOverflowed] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current) {
        setIsOverflowed(textRef.current.scrollHeight > 96);
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [item.description]);

  return (
    <div className="rounded-lg p-6 m-4 bg-section3 border-[#00E4F0] border-2 w-[45%] align-top self-start transition-all duration-500">
      <h2 className="text-2xl font-bold">{item.name}</h2>
      <h3 className="text-xl italic mb-4">{item.profession}</h3>
      <div className="relative">
        <div 
          ref={textRef} 
          className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            isExpanded ? "max-h-[1000px]" : "max-h-24"
          }`}
        >
          <p className="text-gray-200 leading-relaxed">{item.description}</p>
        </div>

        {isOverflowed && !isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-section3 to-transparent pointer-events-none" />
        )}
        {isOverflowed && (
          <div className="flex justify-center mt-2 relative">
            <div className="flex w-full items-end justify-end">
              <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="z-10 hover:bg-white transition-colors rounded-full p-1 border border-[#00E4F0]  bottom-3 right-3"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className={`size-6 text-[#00E4F0] transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default function GetList({ users }: { users: IData[] }) {
  if (!users || users.length === 0) return <div className="text-center p-10 text-white">Нет данных</div>;
  return (
    <div className="flex flex-wrap justify-center w-full items-start">
      {users.map((item) => (
        <UserCard key={item._id} item={item} />
      ))}
    </div>
  );
}