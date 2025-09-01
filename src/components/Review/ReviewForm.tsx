import React, { FormEvent, useCallback, useRef, useState } from "react";
import Rating from "../Rating/Ratings";
import { useReviewContext } from "@/app/contexts/ReviewContext";
import Icon from "../Icon/Icon";
import Button from "@/components/Button/Button";
import { BeatLoader } from "react-spinners";
import { errorToast } from "@/utils/toaster";

type ReviewErrorProps = {
  rating?: string;
  review?: string;
};

const ReviewForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [rating, setRating] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ReviewErrorProps>({});

  const { handleReviewModal, createProductReview, getAndSetReviewsList } =
    useReviewContext();

  const validateForm = useCallback((review: string, rating: number) => {
    const formErrors: ReviewErrorProps = {};
    if (!review) {
      formErrors.review = "review is required.";
    }
    if (!rating) {
      formErrors.rating = "rating is required";
    }
    setErrors(formErrors);
    if (Object.keys(formErrors).length !== 0) {
      return false;
    }
    return true;
  }, []);

  const handleOnFormSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (formRef?.current) {
        const formData = new FormData(formRef.current);
        const review = formData.get("review") as string;
        const isFormValid = validateForm(review, rating);
        if (!isFormValid) {
          errorToast("Please check form fields and try again");
          setIsLoading(false);
          return;
        }
        await createProductReview(review, rating);
        await getAndSetReviewsList();
        setIsLoading(false);
        handleReviewModal();
      }
    },
    [
      createProductReview,
      rating,
      validateForm,
      handleReviewModal,
      getAndSetReviewsList,
    ]
  );

  return (
    <div className="relative">
      <div className="flex justify-between">
        <p className="text font-semibold tracking-wider text-brick">
          Write a Review
        </p>
        <Button type="button" onClick={handleReviewModal}>
          <Icon icon="cross" className="" />
        </Button>
      </div>
      <hr className="border border-gray-300 mt-2" />
      <div className="pt-5">
        <form ref={formRef} onSubmit={handleOnFormSubmit} className="space-y-2">
          <label className="block mb-2 capitalize font-light">
            Select Rating:
          </label>
          <Rating isEditable={true} rating={rating} setRating={setRating} />
          {errors.rating && (
            <p className="text-red-500 text-sm font-light">{errors.rating}</p>
          )}
          <label htmlFor="review" className="block mb-2 capitalize font-light">
            Write your Review:
          </label>
          <textarea
            id="review"
            className="w-full py-2 px-4 border border-black mb-2 focus:outline-none"
            rows={4}
            placeholder="Share your experience..."
            name="review"
            required
          ></textarea>

          <Button
            type="submit"
            className="text-white2 font-xl px-8 py-3 bg-gradient-to-br from-[#5C4033] via-[#A0522D] to-[#DEB887] w-full"
          >
            Submit Review
          </Button>
        </form>
        <BeatLoader loading={isLoading} />
      </div>
    </div>
  );
};

export default ReviewForm;
