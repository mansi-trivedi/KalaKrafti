import React from 'react';
import Image from 'next/image';

const Grid = () => {
    return (
        <div className="w-full p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2">
                <div className="relative overflow-hidden col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[250px] group">
                    <Image
                        src="https://krafti.qodeinteractive.com/wp-content/uploads/2019/06/portfolio-main-img-1.jpg" // Path relative to public/
                        alt="portfolio-main-img-1"
                        fill
                        className="object-cover"
                    />
                    <div className='bg-white2 transition-all duration-500 translate-y-[450px] opacity-0 group-hover:opacity-100 group-hover:translate-y-96 m-4 p-4 text-center'>
                        <h1 className="text-brick font-semibold uppercase tracking-widest">Organic Raw</h1>
                        <p className="tracking-wider font-light italic">Handmade</p>
                    </div>
                </div>

                <div className="relative col-span-1 overflow-hidden min-h-[250px] group">
                    <Image
                        src="https://krafti.qodeinteractive.com/wp-content/uploads/2019/06/portfolio-main-img-2.jpg" // Path relative to public/
                        alt="portfolio-main-img-2"
                        fill
                        className="object-cover"
                    />
                    <div className='bg-white2 transition-all duration-500 translate-y-[194px] opacity-0 group-hover:opacity-100 group-hover:translate-y-32  m-4 p-4 text-center'>
                        <h1 className="text-brick font-semibold uppercase tracking-widest">New Wave</h1>
                        <p className="tracking-wider font-light italic">Handmade</p>
                    </div>
                </div>

                <div className="relative col-span-1 overflow-hidden min-h-[250px] group"> {/* Approximate brown background */}
                    <Image
                        src="https://krafti.qodeinteractive.com/wp-content/uploads/2019/06/portfolio-main-img-3.jpg" // Path relative to public/
                        alt="Book mockup 'Creatively Fulfilled'"
                        fill
                        className="object-cover"
                    />
                    <div className='bg-white2 transition-all duration-500 translate-y-[194px] opacity-0 group-hover:opacity-100 group-hover:translate-y-32  m-4 p-4 text-center'>
                        <h1 className="text-brick font-semibold uppercase tracking-widest">Package</h1>
                        <p className="tracking-wider font-light italic">Handmade</p>
                    </div>
                </div>

                <div className="relative col-span-1 overflow-hidden min-h-[250px] group"> {/* Approximate orange background */}
                    <Image
                        src="https://krafti.qodeinteractive.com/wp-content/uploads/2019/06/portfolio-main-img-4.jpg" // Path relative to public/
                        alt="Cardboard box mockup 'Audrey'"
                        fill
                        className="object-cover"
                    />
                    <div className='bg-white2 transition-all duration-500 translate-y-[194px] opacity-0 group-hover:opacity-100 group-hover:translate-y-32  m-4 p-4 text-center'>
                        <h1 className="text-brick font-semibold uppercase tracking-widest">Presentation</h1>
                        <p className="tracking-wider font-light italic">Handmade</p>
                    </div>
                </div>

                <div className="relative col-span-1 overflow-hidden min-h-[250px] group"> {/* Approximate reddish background */}
                    <Image
                        src="https://krafti.qodeinteractive.com/wp-content/uploads/2019/06/portfolio-main-img-5.jpg" // Path relative to public/
                        alt="Large text 'YOU ARE HERE'"
                        fill
                        className="object-cover"
                    />
                    <div className='bg-white2 transition-all duration-500 translate-y-[194px] opacity-0 group-hover:opacity-100 group-hover:translate-y-32  m-4 p-4 text-center'>
                        <h1 className="text-brick font-semibold uppercase tracking-widest">Branding</h1>
                        <p className="tracking-wider font-light italic">Handmade</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid