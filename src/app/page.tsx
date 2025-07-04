import Carousel from "@/components/Carousel/Carousel";
import FeedbackCarousel from "@/components/FeedbackCarousel/FeedbackCarousel";
import Footer from "@/components/Footer/Footer";
import Grid from "@/components/Grid/Grid";
import Header from "@/components/Header/Header";
import Idea from "@/components/Idea/Idea";
import Products from "@/components/Products/Products";
import Scrollup from "@/components/ScrollUp/Scrollup";
import Shop from "@/components/Shop/Shop";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Scrollup />
        <Carousel autoSlide={true} autoSlideInterval={6000} />
        <Idea />
        <Grid />
        <div className="relative flex items-center justify-center overflow-hidden">
          <div className="absolute top-[40%] z-20 lg:top-[32%] md:top-[42%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 337.523 177.015"
              className="w-[337.523px] h-[177.015px] fill-[#f8f0dc] z-20"
            >
              <path d="M138.452,16.927C46.967,49.504,-3.548000000000002,88.918,0.1939999999999884,110.894C3.5379999999999883,130.537,32.78599999999999,120.26100000000001,47.78599999999999,127.927C60.13299999999999,134.237,95.24799999999999,169.458,124.95299999999999,174.92700000000002C164.786,182.26100000000002,206.97899999999998,169.75600000000003,259.12,145.59400000000002C313.78700000000003,120.26100000000002,353.62,71.92700000000002,331.12,31.92700000000002C308.62,-8.072999999999979,206.786,-7.406,138.452,16.927C138.452,16.927,138.452,16.927,138.452,16.927" />
              <path d="M138.452,16.927c-91.485,32.577-142,71.991-138.258,93.967c3.344,19.643,32.592,9.367,47.592,17.033
      c12.347,6.31,47.462,41.531,77.167,47c39.833,7.334,82.026-5.171,134.167-29.333c54.667-25.333,94.5-73.667,72-113.667
      S206.786-7.406,138.452,16.927z" />
            </svg>

          </div>
          <div className="absolute top-[50%] right-[12%] md:right-[25%] lg:top-[48%] lg:right-[35%] z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 130.57 80.008"
              className="w-[130.57px] h-[80.008px] fill-[#CED1C6] z-10"
            >
              <path d="M71.206,6.03C33.724,-3.251,9.54,-1.637,2.64,9.621C-2.726,18.376,-3.422,52.605,35.578,71.938C74.578,91.271,125.796,73.197,130.13,50.363C134.464,27.529,106.206,14.696,71.206,6.03Z" />
              <path d="M71.206,6.03C33.724,-3.251,9.54,-1.637,2.64,9.621c-5.366,8.755-6.062,42.984,32.938,62.317s90.218,1.259,94.552-21.575C134.464,27.529,106.206,14.696,71.206,6.03z" />
            </svg>
          </div>
          <div className="absolute z-0 top-[48%] left-[18%] md:top-[48%] md:left-[35%] lg:top-[43%] lg:left-[39%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 241.83 157.047"
              className="w-[241.83px] h-[157.047px] fill-[#F2CBBA] z-0"
            >
              <path d="M146.926,4.879C123.869,9.342,80.848,4.786,52.96,18.633C22.926,33.546,2.585,67.62,0.259,100.879C-3.074,148.546,24.942,171.334,130.128,147.522C223.628,126.355,252.093,87.879,238.708,36.676C226.966,-8.244,183.093,-2.121,146.926,4.879Z" />
              <path d="M146.926,4.879C123.869,9.342,80.848,4.786,52.96,18.633C22.926,33.546,2.585,67.62,0.259,100.879
        c-3.333,47.667,24.683,70.455,129.869,46.643c93.5-21.167,121.965-59.643,108.58-110.846
        C226.966-8.244,183.093-2.121,146.926,4.879Z"
              />
            </svg>
          </div>
          <FeedbackCarousel autoSlide={true} autoSlideInterval={6000} />
        </div>
        <Shop />
        <Products />
      </main>
      <Footer />
    </>
  );
}
