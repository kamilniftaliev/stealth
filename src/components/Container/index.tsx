import { HTMLAttributes, PropsWithChildren, forwardRef } from "react";
import cx from "clsx";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  direction?: "col" | "row";
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  function Container({ direction = "col", className, ...props }, ref) {
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
  }
);

export function ContainerTitle({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cx("text-gray-900 font-medium text-base", className)}
      {...props}
    />
  );
}
