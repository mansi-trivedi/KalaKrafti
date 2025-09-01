import React from "react";
import CustomModal from "../Modal/Modal";
import { useReviewContext } from "@/app/contexts/ReviewContext";
import ReviewForm from "./ReviewForm";

const ReviewModal = () => {
  const { reviewModal } = useReviewContext();
  return (
    <CustomModal
      isOpen={reviewModal}
      contentStyles={{ width: "50%", position: "relative" }}
    >
      <ReviewForm />
    </CustomModal>
  );
};

export default ReviewModal;
