"use client";
import React, { FC } from "react";
import { ReviewProvider } from "@/app/contexts/ReviewContext";
import ReviewLayout from "./ReviewLayout";
import ReviewModal from "./ReviewModal";
import { useParams } from "next/navigation";

type ReviewPropTypes = {
  isReviewPage: boolean;
};

const Review: FC<ReviewPropTypes> = (props) => {
  const { sku } = useParams<{ sku: string }>();
  const { isReviewPage } = props;

  return (
    <ReviewProvider sku={sku}>
      <ReviewLayout sku={sku} isReviewPage={isReviewPage} />
      <ReviewModal />
    </ReviewProvider>
  );
};

export default Review;
