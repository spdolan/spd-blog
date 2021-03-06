import clsx from "clsx";

import Image from "./Image";
import { getSiteMetaData } from "utils/helpers";

export default function Bio({ className }) {
  const { author, social } = getSiteMetaData();

  return (
    <div className={clsx(`flex items-center`, className)}>
      <Image
        className="flex-shrink-0 mb-0 mr-3 rounded-full w-18 h-16"
        src={require("../content/assets/profile.png")}
        previewSrc={require("../content/assets/profile.png?lqip")}
        alt="Profile"
      />
      <p className="text-base leading-7">
        Hello there! I'm <b className="font-semibold">{author.name}</b>,{" "}
        {author.summary} <br />
        <a href={`https://linkedin.com/in/${social.linkedin}`}>
          Connect with me on LinkedIn.
        </a>
      </p>
    </div>
  );
}
