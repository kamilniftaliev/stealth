import { faArrowRight, faPen } from "@fortawesome/free-solid-svg-icons";
import { Accordion, Container, Icon } from "..";
import { cn } from "@/utils";

export type Document = {
  id: string;
  name: string;
};

type DocumentGroup = {
  id: string;
  title: string;
  documents: Document[];
};

type Props = {
  groups: DocumentGroup[];
  onDocumentSelect: (doc: Document) => void;
  selectedDocuments: Document[];
};

export function GroupedDocuments({
  groups,
  onDocumentSelect,
  selectedDocuments,
}: Props) {
  return (
    <Container className="border-orange-600 p-0 gap-0 overflow-hidden">
      {groups.map(({ id, title, documents }) => (
        <Accordion
          key={id}
          button={title}
          body={
            <ul className="flex flex-col p-2 gap-2.5">
              {documents.map((doc) => {
                const isSelected = selectedDocuments.some(
                  ({ id }) => id === doc.id
                );

                return (
                  <li
                    key={doc.id}
                    className="flex justify-between items-center px-2"
                    onClick={() => onDocumentSelect(doc)}
                  >
                    <span className="py-2">{doc.name}</span>
                    <button
                      className={cn(
                        "box-border border border-gray-300 rounded w-6 h-6"
                      )}
                    >
                      <Icon
                        className={cn(isSelected && "w-7/12")}
                        icon={isSelected ? faPen : faArrowRight}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          }
        />
      ))}
    </Container>
  );
}

export { GROUPED_DOCUMENTS } from "./constants";
