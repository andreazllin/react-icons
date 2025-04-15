import type { FunctionComponent, SVGProps } from "react";
import spritesheetHref from "../icon/spritesheet.svg";
import type { IconName } from "../../types/icon";
import coloredSpritesheetHref from "../colored-icon/spritesheet.svg";
import type { IconName as ColoredIconName } from "../../types/colored-icon";
import duotoneSpritesheetHref from "../duotone-icon/spritesheet.svg";
import type { IconName as DuotoneIconName } from "../../types/duotone-icon";

const spritesheets = {
  colored: coloredSpritesheetHref,
  icon: spritesheetHref,
  duotone: duotoneSpritesheetHref,
} as const;

export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
} & (
    | {
        type: "colored";
        name: ColoredIconName;
      }
    | {
        type: "icon";
        name: IconName;
      }
    | {
        type: "duotone";
        name: DuotoneIconName;
      }
  );

const CombinedIcon: FunctionComponent<IconProps> = ({
  name,
  size = 18,
  type,
  ...props
}) => {
  return (
    <svg height={size} width={size} {...props}>
      <use href={`${spritesheets[type]}#${name}`} />
    </svg>
  );
};

export default CombinedIcon;
