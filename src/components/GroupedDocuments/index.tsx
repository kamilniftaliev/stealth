import {
  faArrowLeft,
  faArrowRight,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { Accordion, Container, Icon } from "..";

type DocumentGroup = {
  id: string;
  title: string;
  documents: {
    id: string;
    name: string;
    isSelected?: boolean;
  }[];
};

type Props = {
  groups: DocumentGroup[];
};

export function GroupedDocuments({ groups }: Props) {
  return (
    <Container className="border-orange-600 p-0">
      {groups.map(({ id, title, documents }) => {
        return (
          <Accordion
            key={id}
            button={title}
            body={
              <ul>
                {documents.map((doc) => (
                  <li key={doc.id} className="flex justify-between">
                    <span>{doc.name}</span>
                    <button className="border border-gray-300">
                      <Icon icon={doc.isSelected ? faPencil : faArrowLeft} />
                    </button>
                  </li>
                ))}
              </ul>
            }
          />
        );
      })}
    </Container>
  );
}

export { GROUPED_DOCUMENTS } from "./constants";
