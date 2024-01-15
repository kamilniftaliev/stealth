import { cn } from '@/utils';
import { HTMLAttributes, forwardRef } from 'react';
import { CONTAINER_TITLE_SIZES } from './constants';

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  direction?: 'col' | 'row';
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  function Container({ direction = 'col', className, ...props }, ref) {
    return (
      <div
        className={cn(
          `flex flex-${direction} gap-3 bg-white rounded-lg border border-gray-300 p-4`,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

type ContainerTitleProps = HTMLAttributes<HTMLParagraphElement> & {
  size?: keyof typeof CONTAINER_TITLE_SIZES;
};

export function ContainerTitle({
  className,
  size = 'sm',
  ...props
}: ContainerTitleProps) {
  const sizeClasses = CONTAINER_TITLE_SIZES[size];

  return (
    <p className={cn('text-gray-900', sizeClasses, className)} {...props} />
  );
}
