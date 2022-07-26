import React from "react";

import "./Button.scss";

// import ExternalLink from "../../svgs/external-link.svg";
import ArrowRight from "../../svgs/arrow-right.svg";
import ArrowRightGreen from "../../svgs/arrow-right-green.svg";

export type ButtonProps = {
  text: string;
  green?: boolean;
  withBackground?: boolean;
  visualIcon?: React.ReactElement;
  arrowIcon?: boolean;
  externalLinkIcon?: boolean;
  semiTransparent?: boolean;
  onClick?: () => void;
  href?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  green,
  visualIcon,
  withBackground,
  arrowIcon,
  externalLinkIcon,
  onClick = () => {},
  href,
}) => {

  return (
    <button
      className={`button-wrapper ${green ? "green" : ""} ${withBackground ? "with-background" : ""}`}
      onClick={onClick}
      data-href={href}
    >
      {visualIcon && <span className="visual-icon">{visualIcon}</span>}
      {text}
      {!green && arrowIcon && <span className="arrow-icon"><ArrowRight /></span>}
      {green && arrowIcon && <span className="arrow-icon"><ArrowRightGreen /></span>}
      {/* {externalLinkIcon && <ExternalLink />} */}
    </button>
  );
};

export default Button;
