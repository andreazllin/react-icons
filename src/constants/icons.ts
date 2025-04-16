import { IconProps } from "../components/combined-icon";
import { iconNames as duotoneIconNames } from "../types/duotone-icon";
import { iconNames as coloredIconNames } from "../types/colored-icon";
import { iconNames as monotoneIconNames } from "../types/icon";

export const iconNames: {
  [key in IconProps["type"]]: readonly string[];
} = {
  colored: coloredIconNames,
  icon: monotoneIconNames,
  duotone: duotoneIconNames
};