import { useReviewContext } from "@/app/contexts/ReviewContext";
import React, { FC } from "react";
import { ProductReviewType } from "types/review";
import Rating from "../Rating/Ratings";

type ReviewListPropTypes = {
  reviews: ProductReviewType[];
};

const ReviewList: FC<ReviewListPropTypes> = (props) => {
  const { reviews } = props;
  const { getInitials, formatDate } = useReviewContext();

  return (
    <>
      {reviews?.length ? (
        <ul className="flex flex-col gap-4 my-3">
          {reviews.map((review, key) => {
            return (
              <li
                key={key}
                className="py-5 text-left border border-gray-300 px-4 rounded-lg bg-white2"
              >
                <div className="flex items-start">
                  <div className="bg-brick p-3 text-white font-semibold rounded-full">
                    {getInitials(review.username ?? "Unknown User")}
                  </div>
                  <div className="ml-6">
                    <div className="flex items-center">
                      <Rating isEditable={false} rating={review.rating} />
                    </div>
                    <p className="mt-2 text-sm font-light">{review.review}</p>
                    <p className="mt-2 font-semibold text-sm tracking-wider">
                      {review.username ?? "Unknown User"}
                    </p>
                    <p className="mt-1 text-sm">
                      {formatDate(review.dateCreated)}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="p-2 font-light text-center tracking-wider text-sm">
          No Review Yet
        </div>
      )}
    </>
  );
};

export default ReviewList;
