import Image from "next/image";
import classNames from "classnames";

import WebsiteIcon from "components/svgs/SVGIcon";

import elmix from "public/img/icons/elmix.png";

const Elmix: WebsiteIcon = (props) => {
  return (
    <div {...props} className={classNames("relative", props.className)}>
      <svg
        className="h-full w-auto"
        xmlns="http://www.w3.org/2000/svg"
        width="628"
        height="410"
      />
      <Image
        src={elmix}
        alt="Elmix's Logo"
        quality={100}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default Elmix;
