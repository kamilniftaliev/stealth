import { Container, Icon } from '..';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { COLORS, TagColors } from './constants';

type Props = {
  label: string;
  color: TagColors;
  onDelete: () => void;
};

export function Tag({ label, color: colorName, onDelete }: Props) {
  const color = COLORS[colorName];

  return (
    <Container
      direction="row"
      className={`items-center py-0.5 px-3 gap-2 cursor-default ${color.background} border-0`}
    >
      <span className={color.text}>{label}</span>
      <Icon
        onClick={onDelete}
        icon={faXmark}
        className={`w-2.5 ${color.text} cursor-pointer`}
      />
    </Container>
  );
}

export { TagColors } from './constants';
