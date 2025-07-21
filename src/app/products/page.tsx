import AllProduct from '@/components/AllProduct/AllProduct'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Scrollup from '@/components/ScrollUp/Scrollup'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <main className="">
                <Scrollup />
                <AllProduct />
            </main>
            <Footer />
        </>
    )
}

export default page