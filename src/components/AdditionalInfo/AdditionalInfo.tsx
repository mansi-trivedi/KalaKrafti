"use client";
import { useState } from "react";

const AdditionalInfo = () => {
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor se incididunt ut labore et dolore magna aliqua. Ut
              enim ad min im veniam, quis nostruda exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute ire dolor in
              reprehenderit in olupt ate velit esse cillum. dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </p>
          </div>
        )}

        {activeTab === "info" && (
          <table className="w-72">
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
          </table>
        )}

        {activeTab === "reviews" && <div></div>}
      </div>
    </div>
  );
};

export default AdditionalInfo;
