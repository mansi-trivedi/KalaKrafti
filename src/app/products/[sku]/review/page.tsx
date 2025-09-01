import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Review from "@/components/Review";
import React, { FC } from "react";

const ReviewPage: FC = () => {
  return (
    <>
      <Header />
      <div className=" py-8 px-4 bg-white">
        <Review isReviewPage={true} />
      </div>
      <Footer />
    </>
  );
};

export default ReviewPage;
