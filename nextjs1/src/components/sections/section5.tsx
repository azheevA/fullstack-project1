import React from 'react'
import Image from 'next/image'
export default function Section5() {
  return (
    <>
    <div className="flex w-full px-20 gap-10 mt-20 mb-10">
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
    </>
  )
}
