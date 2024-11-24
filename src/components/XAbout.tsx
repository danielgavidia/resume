import React from "react";
import profileImage from "../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { contactData } from "@/lib/contactData";
import { blurb } from "@/lib/blurb";

const XLink = ({ icon, link }: { icon: IconDefinition; link: string }) => {
  return (
    <div className="flex items-center space-x-2 text-xs">
      <div className="w-6">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>{link}</div>
    </div>
  );
};

const XAbout = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center max-w-[500px]">
      {/* Profile picture */}
      <div className="flex w-full justify-center">
        <img src={profileImage.src} className="rounded-xl w-40 h-40" />
      </div>

      {/* Info */}
      <div className="flex flex-col space-y-4">
        {/* General info */}
        <div>
          <p className="font-bold text-lg pb-2">Daniel Gavidia</p>
          <p className="font-bold text-sm">Software Development, Finance</p>
          <p className="font-light text-sm">Brooklyn, NY</p>
        </div>

        {/* Contact info */}
        <div>
          {contactData.map((c, key) => (
            <XLink key={key} icon={c.icon} link={c.link} />
          ))}
        </div>

        <div className="pb-4 w-full border-b-[0.5px]"></div>

        {/* Blurb */}
        <div className="text-sm">{blurb}</div>
      </div>
    </div>
  );
};

export default XAbout;
