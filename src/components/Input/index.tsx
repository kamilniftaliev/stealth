import cx from "clsx";
import { InputHTMLAttributes } from "react";
import { Container, Icon, IconProps } from "..";

type Props = InputHTMLAttributes<{}> & {
  icon?: IconProps["icon"];
};

export function Input({ icon, className, ...inputProps }: Props) {
  return (
    <Container direction="row" className="py-0 items-center">
      {icon && <Icon icon={icon} />}
      <input className={cx("outline-0 py-2", className)} {...inputProps} />
    </Container>
  );
}