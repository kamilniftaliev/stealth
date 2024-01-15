import { cn, match } from '@/utils';
import {
  faArrowLeft,
  faCheck,
  faClose,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Container, ContainerTitle, Document, Icon, Input } from '..';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from 'react';

type Props = {
  selectedDocs: Document[];
  setSelectedDocs: Dispatch<SetStateAction<Document[]>>;
};

export function SelectedDocuments({ selectedDocs, setSelectedDocs }: Props) {
  const [searchValue, setSearchValue] = useState('');

  const onSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }, []);

  const unselectDocument = useCallback(
    (docId: Document['id']) => {
      setSelectedDocs((selectedDocs: Document[]) =>
        selectedDocs.filter(({ id }) => id !== docId),
      );
    },
    [setSelectedDocs],
  );

  const documents = selectedDocs.filter((doc) => match(doc.name, searchValue));

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
              key={id}
              onClick={() => unselectDocument(id)}
              className="flex gap-2 items-center cursor-pointer"
            >
              <Icon className="text-green-600" icon={faCheck} />
              <span className="grow py-2 overflow-hidden text-nowrap text-ellipsis">
                {name}
              </span>
              <button
                className={cn(
                  'box-border border border-gray-300 rounded w-6 h-6',
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
