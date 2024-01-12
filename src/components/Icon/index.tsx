import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import cx from "clsx";

import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export type IconProps = Pick<
  FontAwesomeIconProps,
  "className" | "icon" | "onClick"
>;

export function Icon({ className, ...props }: IconProps) {
  return (
    <FontAwesomeIcon className={cx(`text-gray-600`, className)} {...props} />
  );
}
