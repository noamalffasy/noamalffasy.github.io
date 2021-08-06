import WebsiteIcon from "components/svgs/SVGIcon";

const Oyah: WebsiteIcon = (props) => {
  return (
    <svg {...props} viewBox="0 0 592 237" version="1.1">
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-1"
        >
          <stop stopColor="#000000" offset="0%" />
          <stop stopColor="#FF0000" offset="100%" />
        </linearGradient>
      </defs>
      <text
        id="OYAH"
        fill="url(#linearGradient-1)"
        fontFamily="TimesNewRomanPS-BoldMT, Times New Roman"
        fontSize="200"
        fontWeight="bold"
      >
        <tspan x="1" y="178">
          OYAH
        </tspan>
      </text>
    </svg>
  );
};

export default Oyah;
