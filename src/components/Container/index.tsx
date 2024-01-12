import { cn } from "@/utils";
import { HTMLAttributes, forwardRef } from "react";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  direction?: "col" | "row";
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  function Container({ direction = "col", className, ...props }, ref) {
    return (
      <div
        className={cn(
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
      className={cn("text-gray-900 font-medium text-base", className)}
      {...props}
    />
  );
}
