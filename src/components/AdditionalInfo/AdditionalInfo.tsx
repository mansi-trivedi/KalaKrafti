"use client";
import { FC, useState } from "react";
import Review from "../Review";

type AdditionalInfoProp = {
  description: string;
  sku: string;
};

const AdditionalInfo: FC<AdditionalInfoProp> = ({ description, sku }) => {
  const [activeTab, setActiveTab] = useState<
    "description" | "info" | "reviews"
  >("description");

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-6 py-2 text-sm tracking-widest border-b border-brick text-brick  ${
            activeTab === "description" ? "border-b-2" : ""
          }`}
        >
          DESCRIPTION
        </button>
        <button
          onClick={() => setActiveTab("info")}
          className={`px-6 py-2 text-sm tracking-widest border-b border-brick text-brick  ${
            activeTab === "info" ? "border-b-2" : ""
          }`}
        >
          ADDITIONAL INFORMATION
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-6 py-2 text-sm tracking-widest border-b border-brick text-brick ${
            activeTab === "reviews" ? "border-b-2" : ""
          }`}
        >
          REVIEWS (1)
        </button>
      </div>

      <div className="mt-6 ">
        {activeTab === "description" && (
          <div className="text-sm font-light tracking-wider">
            <p>{description}</p>
          </div>
        )}

        {activeTab === "info" && (
          <table className="w-72">
            <tbody>
              <tr className="h-10">
                <td className="tracking-widest font-bold text-brick">WEIGHT</td>
                <td className="font-light">0.5Kg</td>
              </tr>
              <tr className="h-10">
                <td className="tracking-widest font-bold text-brick">
                  DIMENSIONS
                </td>
                <td className="font-light"> 15 × 20 × 20 cm</td>
              </tr>
            </tbody>
          </table>
        )}

        {activeTab === "reviews" && (
          <div>
            <Review isReviewPage={false} sku={sku} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdditionalInfo;
