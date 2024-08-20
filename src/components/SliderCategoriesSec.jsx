"use client";

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import { useCallback } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function EmblaCarousel({ data }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="overflow-hidden embla" ref={emblaRef}>
            <div className="embla__container">
                {data.map((item, index) => {
                    return (
                        <div key={index} className="embla__slide">
                            <div className='m-3 bg-gray-900'>
                                <div className='w-full pt-4'>
                                    <Image width={250} className='mx-auto' height={250} src={item.image} alt={item.title} />
                                </div>
                                <div className='flex items-center justify-between px-8 pt-1 pb-4'>
                                    <h4>{item.title}</h4>
                                    <FaArrowRight className='text-white' />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='absolute z-10 flex gap-10 p-4 bg-black border-2 border-gray-900 rounded-lg right-10 top-10'>
                <button className="p-4 bg-gray-900 rounded-lg embla__prev" onClick={scrollPrev}>
                    <FaArrowLeft className='text-white' />
                </button>
                <button className="p-4 bg-gray-900 rounded-lg embla__next" onClick={scrollNext}>
                    <FaArrowRight className='text-white' />
                </button>
            </div>
        </div>
    )
}
