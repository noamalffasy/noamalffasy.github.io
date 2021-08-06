import WebsiteIcon from "components/svgs/SVGIcon";

const HebrewGame: WebsiteIcon = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 825">
      <path
        fill="#ffd4c4"
        fillOpacity="1"
        stroke="none"
        d="M220 825v-55h-55v-55h-55v-55H55V550h55V220h55V110h220v55h55v55h165v110h55v385h-55v55H495v55H220z"
      ></path>
      <path
        fill="#000"
        fillOpacity="1"
        stroke="none"
        d="M385 715h55v-55h-55zm-55 0h55v-55h-55zm-55-55h55v-55h-55zm-55-55h55v-55h-55z"
      ></path>
      <g fill="#000" fillOpacity="1" stroke="none">
        <path d="M330 495h55v-55h-55zm0-55h55v-55h-55zm0-55h55v-55h-55z"></path>
        <path d="M495 495h55v-55h-55zm0-55h55v-55h-55zm0-55h55v-55h-55z"></path>
      </g>
      <path
        fill="#ff882d"
        fillOpacity="1"
        stroke="none"
        d="M440 220v-55h-55V55h55V0h165v220H440z"
      ></path>
      <path
        fill="#ff7c78"
        fillOpacity="1"
        stroke="none"
        d="M165 825v-55h55v55h-55zm0-55H55V660h55v55h55v55zM55 660H0V275h55v-55h55v330H55v110zm55-440V110h55v110h-55z"
      ></path>
    </svg>
  );
};

export default HebrewGame;
