import { Button, Container } from '@/components';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export function Footer() {
  return (
    <Container
      direction="row"
      className="justify-between rounded-none border-0 border-t"
    >
      <Button size="xs" className="text-gray-900" leftIcon={faChevronLeft}>
        Back
      </Button>
      <Button
        className="border-0 bg-primary text-white"
        size="xs"
        rightIcon={faChevronRight}
      >
        Next
      </Button>
    </Container>
  );
}
