'use client'
import Image, { StaticImageData } from 'next/image'

import { ThumbImage } from '@/components/ThumbImage'

import Image01 from '@/assets/img-01.webp'
import Image02 from '@/assets/img-02.webp'
import Image03 from '@/assets/img-03.jpeg'
import Image04 from '@/assets/img-04.jpeg'
import Image05 from '@/assets/img-05.jpeg'
import Image06 from '@/assets/img-06.webp'
import ArrowIcon from '@/assets/arrow.svg'
import CloseIcon from '@/assets/close.svg'
import { useState } from 'react'

export default function Home() {
  const [dataImgCurrent, setDataImgCurrent] = useState<StaticImageData | null>(
    null
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const imageList = [Image01, Image02, Image03, Image04, Image05, Image06]

  const isOpen = dataImgCurrent !== null

  const handleClickToOpenImage = (index: number) => {
    setCurrentIndex(index)
    setDataImgCurrent(imageList[index])
  }

  const handleClickToCloseImage = () => {
    setDataImgCurrent(null)
  }

  const handleNavigate = (direction: 'next' | 'previus') => {
    let index = direction === 'next' ? currentIndex + 1 : currentIndex - 1
    if (index < 0) {
      index = imageList.length - 1
    }

    if (index >= imageList.length) {
      index = 0
    }

    setCurrentIndex(index)
    setDataImgCurrent(imageList[index])
  }
  return (
    <>
      <section className="w-full min-h-screen flex items-start justify-center py-10 px-3 bg-slate-900">
        <div className="grid grid-cols-3 gap-3">
          {imageList.map((img, index) => (
            <ThumbImage
              key={index}
              srcImage={img}
              onClick={() => handleClickToOpenImage(index)}
            />
          ))}
        </div>
      </section>
      {isOpen && (
        <div className="flex items-center justify-center fixed inset-0 w-full h-full z-30 bg-black bg-opacity-50 gap-4">
          <button
            className="absolute top-5 right-5 w-10"
            onClick={handleClickToCloseImage}
          >
            <Image src={CloseIcon} alt="Button Close" />
          </button>
          <button
            className="w-12 rotate-180 hover:opacity-50 transition-opacity ease-linear"
            onClick={() => handleNavigate('previus')}
          >
            <Image src={ArrowIcon} alt="Arrow Previous" />
          </button>
          {dataImgCurrent && (
            <Image src={dataImgCurrent} alt="Image" width={500} />
          )}
          <button
            className="w-12 hover:opacity-50 transition-opacity ease-linear"
            onClick={() => handleNavigate('next')}
          >
            <Image src={ArrowIcon} alt="Arrow Next" />
          </button>
        </div>
      )}
    </>
  )
}
