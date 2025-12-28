import React from 'react'
import Image from 'next/image'
export default function Section8() {
  return (
    <>  
      <Image
        src="/images/russia.PNG"
        width={1200}
        height={400}
        alt="russia"
        className="w-2/3 mx-auto mb-20 rounded-lg border-2 border-[#FF4C00]"
      />
    </>
  )
}
