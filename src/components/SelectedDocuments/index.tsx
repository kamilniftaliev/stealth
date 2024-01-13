import { cn } from "@/utils";
import { faArrowLeft, faCheck, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container, ContainerTitle, Document, Icon, Input } from "..";
import { ChangeEvent, useCallback, useState } from "react";

type Props = {
  documents: Document[];
  unselect: (docId: Document["id"]) => void
}

export function SelectedDocuments({ documents, unselect }: Props) {
  const [searchValue, setSearchValue] = useState("");
  
  const onSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }, []);

  const noSelectedDocs = !documents.length;

  return (
    <Container className="flex-1">
      <ContainerTitle>Selected Documents</ContainerTitle>

      <Input
        icon={faSearch}
        placeholder="Search"
        value={searchValue}
        onChange={onSearch}
      />

      {noSelectedDocs ? (
        <Container className="bg-gray-100 items-center p-10 gap-y-6">
          <Icon className="text-7xl text-gray-300" icon={faArrowLeft} />
          <p className="text-gray-500 text-xs font-semibold text-center">
            Select documents from the left panel to have employees review them
            and provide a signature acknowledging review
          </p>
        </Container>
      ) : (
        <Container className="border-green-600 gap-3">
          {documents.map(({ id, name }) => (
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => unselect(id)}
              key={id}
            >
              <Icon className="text-green-600" icon={faCheck} />
              <span className="grow py-2">{name}</span>
              <button
                className={cn(
                  "box-border border border-gray-300 rounded w-6 h-6"
                )}
              >
                <Icon icon={faClose} />
              </button>
            </div>
          ))}
        </Container>
      )}
    </Container>
  );
}
