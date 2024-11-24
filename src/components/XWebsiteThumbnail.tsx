"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const XWebsiteThumbnail = ({ link }: { link: string }) => {
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/preview?url=${encodeURIComponent(link)}`)
      .then((res) => setThumbnail(res.data.image))
      .catch(() => setThumbnail(null));
  });
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {thumbnail ? (
        <img src={thumbnail} alt="Website thumbnail" />
      ) : (
        <span>No Preview Available</span>
      )}
    </a>
  );
};

export default XWebsiteThumbnail;
