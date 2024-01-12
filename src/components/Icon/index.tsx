import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { cn } from "@/utils";

config.autoAddCss = false;

export type IconProps = Pick<
  FontAwesomeIconProps,
  "className" | "icon" | "onClick"
>;

export function Icon({ className, ...props }: IconProps) {
  return (
    <FontAwesomeIcon className={cn(`text-gray-600`, className)} {...props} />
  );
}
