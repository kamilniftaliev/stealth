import { cn } from '@/utils';
import { Container, ContainerProps, Icon, IconProps } from '..';
import { SIZES } from './constants';

type Props = Pick<ContainerProps, 'className' | 'children'> & {
  leftIcon?: IconProps['icon'];
  rightIcon?: IconProps['icon'];
  size?: keyof typeof SIZES;
  onClick?: () => void;
};

export function Button({
  leftIcon,
  rightIcon,
  className,
  children,
  onClick,
  size = 'sm',
}: Props) {
  const sizeClasses = SIZES[size];

  return (
    <Container
      direction="row"
      className={cn(
        'inline-flex cursor-pointer border-gray-200 text-gray-600 font-semibold items-center',
        sizeClasses.container,
        className,
      )}
      onClick={onClick}
    >
      {leftIcon && <Icon icon={leftIcon} className="text-inherit" />}
      <span className="text-nowrap">{children}</span>
      {rightIcon && <Icon icon={rightIcon} className="text-inherit" />}
    </Container>
  );
}
