import { cn } from "@/utils";
import { Container, Icon } from "..";
import { ReactNode, useCallback, useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

type Props = {
  button: ReactNode;
  body: ReactNode;
};

export function Accordion({ button, body }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  return (
    <div className="flex flex-col cursor-pointer shrink-0">
      <Container
        direction="row"
        className="bg-gray-100 border-gray-200 p-5 w-full justify-between items-center rounded-none"
        onClick={toggle}
      >
        <div>{button}</div>
        <Icon icon={isOpen ? faChevronUp : faChevronDown} />
      </Container>
      <Container
        className={cn("p-0 border-0 overflow-hidden", {
          "h-0": !isOpen,
        })}
      >
        {body}
      </Container>
    </div>
  );
}
