import React, { FC } from "react";
import Link from "next/link";

import { useReviewContext } from "@/app/contexts/ReviewContext";
import ReviewList from "./ReviewList";

type ReviewPropTypes = {
  isReviewPage: boolean;
  sku: string;
};

const ReviewLayout: FC<ReviewPropTypes> = (props) => {
  const { sku, isReviewPage } = props;
  const { handleReviewModal, productReviews } = useReviewContext();
  const reviews = isReviewPage ? productReviews : productReviews.slice(0, 5);

  return (
    <div className="relative pb-5">
      <div className="flex justify-between">
        {isReviewPage && (
          <h2 className="font-semibold text-brick tracking-wider mb-4">
            Customer Reviews
          </h2>
        )}
      </div>
      <div>
        <button
          type="button"
          className="bg-brick text-white tracking-wider text-sm py-1 px-2"
          onClick={handleReviewModal}
        >
          Write a Review
        </button>
        <ReviewList reviews={reviews} />
        {reviews?.length && !isReviewPage ? (
          <Link
            href={{
              pathname: `/products/${sku}/review`,
            }}
          >
            <p className="font-semibold underline text-sm tracking-wider text-brick">
              See All reviews
            </p>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default ReviewLayout;
