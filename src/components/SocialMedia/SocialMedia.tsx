import React from "react";
import Icon from "../Icon/Icon";
import { socialMedia } from "@/constants/socialMedia";

const SocialMedia = () => {
  return (
    <div className="flex space-x-4 mb-4">
      <a
        href={socialMedia.instagram}
        className="text-brick hover:cursor-pointer"
      >
        <Icon icon="instagram" />
      </a>
      <a
        href={socialMedia.facebook}
        className="text-brick hover:cursor-pointer"
      >
        <Icon icon="facebook" />
      </a>
      <a href={socialMedia.youTube} className="text-brick hover:cursor-pointer">
        <Icon icon="youTube" />
      </a>
    </div>
  );
};

export default SocialMedia;
