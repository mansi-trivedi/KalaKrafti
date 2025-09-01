import Background from "@/components/Background/Background";
import Carousel from "@/components/Carousel/Carousel";
import FeedbackCarousel from "@/components/FeedbackCarousel/FeedbackCarousel";
import Footer from "@/components/Footer/Footer";
import Grid from "@/components/Grid/Grid";
import Header from "@/components/Header/Header";
import Idea from "@/components/Idea/Idea";
import Products from "@/components/Products/Products";
import Shop from "@/components/Shop/Shop";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel autoSlide={true} autoSlideInterval={6000} />
      <Idea />
      <Grid />
      <div className="relative flex items-center justify-center overflow-hidden">
        <Background />
        <FeedbackCarousel autoSlide={true} autoSlideInterval={6000} />
      </div>
      <Shop />
      <Products />
      <Footer />
    </>
  );
}
