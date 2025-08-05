import Background from "@/components/Background/Background";
import Carousel from "@/components/Carousel/Carousel";
import FeedbackCarousel from "@/components/FeedbackCarousel/FeedbackCarousel";
import Grid from "@/components/Grid/Grid";
import Idea from "@/components/Idea/Idea";
import Products from "@/components/Products/Products";
import Shop from "@/components/Shop/Shop";

export default function Home() {
  return (
    <>
      <Carousel autoSlide={true} autoSlideInterval={6000} />
      <Idea />
      <Grid />
      <div className="relative flex items-center justify-center overflow-hidden">
        <Background />
        <FeedbackCarousel autoSlide={true} autoSlideInterval={6000} />
      </div>
      <Shop />
      <Products />
    </>
  );
}
