import { HTMLAttributes, PropsWithChildren, forwardRef } from "react";
import cx from "clsx";

type Props = HTMLAttributes<HTMLDivElement> & {
  direction?: "col" | "row";
};

export const Container = forwardRef<HTMLDivElement, Props>(function Container(
  { direction = "col", className, ...props },
  ref
) {
  return (
    <div
      className={cx(
        `flex flex-${direction} gap-3 bg-white rounded-lg border border-gray-300 p-4`,
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

export function ContainerTitle({ children }: PropsWithChildren) {
  return <p className="text-gray-900 font-medium text-base">{children}</p>;
}
