import cx from "clsx";

import { Container, ContainerProps, Icon } from "..";

type Props = ContainerProps & {
  label?: string;
  isChecked?: boolean;
};

export function Checkbox({
  isChecked,
  label,
  className,
  onClick,
  color,
  ...props
}: Props) {
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
      <Container
        direction="row"
        className={cx(
          "bg-gray-200 h-7 w-14 rounded-2xl p-1 border-0",
          className,
          isChecked && color
        )}
        {...props}
      >
        <span
          className={cx(
            "aspect-square h-full rounded-full bg-white left-full right-auto transition-transform",
            isChecked && "translate-x-7"
          )}
        />
      </Container>
      {!!label && <span className="text-gray-900 text-base">{label}</span>}
    </div>
  );
}
