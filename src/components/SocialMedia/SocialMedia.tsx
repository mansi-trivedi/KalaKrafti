import React from "react";
import Icon from "../Icon/Icon";

const SocialMedia = () => {
  return (
    <div className="flex space-x-4 mb-4">
      <a href="#" className="text-brick hover:cursor-pointer">
        <Icon icon="instagram" />
      </a>
      <a href="#" className="text-brick hover:cursor-pointer">
        <Icon icon="facebook" />
      </a>
      <a href="#" className="text-brick hover:cursor-pointer">
        <Icon icon="youTube" />
      </a>
    </div>
  );
};

export default SocialMedia;
