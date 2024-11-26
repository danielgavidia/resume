import React from "react";
import profileImage from "../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { contactData } from "@/lib/contactData";
import XBlurb from "./XBlurb";

const XLink = ({
  icon,
  link,
  linkOutside,
}: {
  icon: IconDefinition;
  link: string;
  linkOutside: boolean;
}) => {
  return (
    <div className="flex items-center space-x-2 text-xs">
      <div className="w-6">
        <FontAwesomeIcon icon={icon} />
      </div>
      {linkOutside ? (
        <a href={`https://${link}`} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      ) : (
        <div>{link}</div>
      )}
    </div>
  );
};

const XAbout = () => {
  return (
    <div className="flex flex-col space-y-4 justify-center max-w-[500px]">
      <div className="md:flex md:flex-row-reverse md:space-x-reverse md:space-x-8 md:space-y-0 space-y-4">
        <div className="flex justify-center md:w-40">
          <img src={profileImage.src} className="rounded-xl w-40 h-40" />
        </div>

        <div className="flex flex-col space-y-4 md:flex-1">
          <div>
            <p className="font-bold text-lg pb-2">Daniel Gavidia</p>
            <p className="font-bold text-sm">Software Development, Finance</p>
            <p className="font-light text-sm">Brooklyn, NY</p>
          </div>

          <div>
            {contactData.map((c, key) => (
              <XLink key={key} icon={c.icon} link={c.link} linkOutside={c.linkOutside} />
            ))}
          </div>
        </div>
      </div>

      <div className="pb-4 w-full border-b-[0.5px]"></div>

      <div className="text-sm">
        <XBlurb />
      </div>
    </div>
  );
};

export default XAbout;
