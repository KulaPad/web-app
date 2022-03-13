import { Link, Image } from "@chakra-ui/react";
import React from "react";

const SocialImage = ({ link, imageLink }) => {
  if (!link)
    return (
      <Image
        loading="lazy"
        src={imageLink}
        // mx="12px"
        width="42px"
        height="42px"
        className="social-icons"
      />
    );
  return (
    <Link href={link} isExternal>
      <Image
        loading="lazy"
        src={imageLink}
        mx="12px"
        width="42px"
        height="42px"
        className="social-icons"
      />
    </Link>
  );
};

export default SocialImage;
