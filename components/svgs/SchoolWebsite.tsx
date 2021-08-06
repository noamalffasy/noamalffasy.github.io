import Image from "next/image";
import classNames from "classnames";

import WebsiteIcon from "components/svgs/SVGIcon";

import school from "public/img/icons/school.png";

const SchoolWebsite: WebsiteIcon = (props) => {
  return (
    <div {...props} className={classNames("relative", props.className)}>
      <svg
        className="h-full w-auto"
        xmlns="http://www.w3.org/2000/svg"
        width="285"
        height="292"
      />
      <Image
        src={school}
        alt="School's Logo"
        quality={100}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default SchoolWebsite;
