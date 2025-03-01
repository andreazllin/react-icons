import type { FunctionComponent, SVGProps } from "react";
import spritesheetHref from "./spritesheet.svg";
import type { IconName } from "../../types/icon";

export type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

const Icon: FunctionComponent<IconProps> = ({ name, size = 18, ...props }) => {
  return (
    <svg height={size} width={size} {...props}>
      <use href={`${spritesheetHref}#${name}`} />
    </svg>
  );
};

export default Icon;
