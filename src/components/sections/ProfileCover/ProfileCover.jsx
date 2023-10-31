import React from "react";
import cover from "../../../images/cover-image.jpg";

const ProfileCover = () => {
  return (
    <div className="h-60 w-full">
      <img
        src={cover}
        alt="cover"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default ProfileCover;
