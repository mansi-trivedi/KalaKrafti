"use client";
import React, { useCallback, useEffect, useState } from 'react';
import { customerFeedback } from "@/constants/customerFeedback";
import Image from 'next/image';

type CarouselProp = {
    autoSlide: boolean,
    autoSlideInterval: number
}

const FeedbackCarousel: React.FC<CarouselProp> = (props) => {
    const { autoSlide, autoSlideInterval = 3000 } = props
    const [curr, setCurr] = useState<number>(0)

    const next = () => setCurr((curr) => (curr === customerFeedback.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [autoSlide, autoSlideInterval])

    const handleSlide = useCallback((i: number) => { setCurr(i) }, [])

    return (
        <div className='relative overflow-hidden z-30'>
            <div className={`flex transition-transform ease-out duration-700 h-[110vh]`} style={{ transform: `translateX(-${curr * 100}%)`, width: `100%` }} >
                {
                    customerFeedback.map((slide, index) => (
                        <div key={index} className="relative h-full text-center flex-shrink-0 flex flex-col justify-center items-center" style={{ width: `100%` }}>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 41.358 31.368"
                                    className="w-[41.358px] h-[31.368px] fill-[#2C2D7F]"
                                >
                                    <path d="M20.602,31.368c0,0-10.634-14.313-13.493-19.653c0,0,2.402,6.949,4.23,9.867c0,0-5.273,2.051-8.629-3.609 S0.063,0,0.063,0s14.408,1.24,18.85,8.776s-3.264,10.911-3.264,10.911s-7.327-7.774-7.842-8.637c0,0,7.441,12.53,11.088,17.13 C18.895,28.181,20.724,30.674,20.602,31.368z" />
                                    <path d="M21.969,30.557c0,0,0.143-0.683,1.729-2.143s10.43-10.453,10.43-10.453s-6.167,4.199-7.418,5.619 c0,0-4.914-4.688-1.166-8.717c3.748-4.029,11.506-4.502,15.814-3.995c0,0-1.19,8.798-4.827,13.375 c-1.197,1.507-3.876,2.135-6.347,1.534l4.306-7.401C34.49,18.376,23.064,29.988,21.969,30.557z" />
                                </svg>
                            </div>
                            <h1 className='text-brick uppercase font-semibold text-4xl m-5 tracking-wider'>They Said About Us</h1>
                            <p className='text-brick w-[62vw] font-light tracking-wide mb-3'>{slide.feedback}</p>
                            <div className='bg-amber-200 w-[80px] h-[80px] m-4 rounded-full relative overflow-hidden'>
                                <Image
                                    src={slide.image}
                                    alt="testimonials-image"
                                    fill
                                    objectFit="cover"
                                />
                            </div>
                            <div className='text-center'>
                                <h1 className='text-brick font-semibold tracking-widest uppercase'>{slide.name}</h1>
                                <p className='italic font-light'>{slide.occupation}</p>
                            </div>
                        </div>
                    ))
                }
            </div >
            <div className='lg:-rotate-90 flex items-center justify-center absolute w-full h-20 bottom-0 right-0 left-0 lg:bottom-[50%] lg:left-[48%] xl:bottom-[60%] xl:left-[48%] 2xl:bottom-[60%] 2xl:left-[48%]'>
                <div className='flex items-center justify-center gap-8'>
                    {customerFeedback.map((s, i) => (
                        <div key={i} className='cursor-pointer p-1' onClick={() => handleSlide(i)}>
                            <div className={`origin-bottom transition-all ease-out duration-700 w-[1.8px] h-6 bg-white rounded-full ${curr === i ? "scale-y-150 bg-gradient-to-t from-[#5C4033] to-[#b27d38]" : "bg-gradient-to-t from-[#5C4033] to-[#DEB887]"} hover:scale-y-150 hover:bg-gradient-to-t hover:from-[#5C4033] hover:to-[#b27d38]`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeedbackCarousel
