import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  ContainerTitle,
  Dropdown,
  GROUPED_DOCUMENTS,
  GroupedDocuments,
  Input,
  Tag,
  TagColors,
} from "..";
import { Checkbox } from "../Checkbox";
import { Document } from "..";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import {
  JOB_TEMPLATES,
  JobTemplate,
  LOCATIONS,
  Location,
  POSITION_LEVELS,
  PositionLevel,
  SUBSIDIARIES,
  Subsidiary,
} from "@/constants";
import { match } from "@/utils";

type SetState = Dispatch<
  SetStateAction<Array<JobTemplate | Location | Subsidiary | PositionLevel>>
>;

type Props = {
  setSelectedDocs: Dispatch<SetStateAction<Document[]>>;
  selectedDocs: Document[];
};

export function AvailableDocuments({ selectedDocs, setSelectedDocs }: Props) {
  const [searchValue, setSearchValue] = useState("");
  const [jobTemplates, setJobTemplate] = useState<JobTemplate[]>([]);
  const [locations, setLocation] = useState<Location[]>([]);
  const [subsidiaries, setSubsidiary] = useState<Subsidiary[]>([]);
  const [positionLevels, setPositionLevel] = useState<PositionLevel[]>([]);

  const onSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }, []);

  const deleteTag = (setState: SetState, value: string) => {
    setState((items) => items.filter((item) => item.value !== value));
  };

  const filters = [
    {
      label: "Job Templates",
      selectedItems: jobTemplates,
      items: JOB_TEMPLATES,
      setState: setJobTemplate,
      color: TagColors.Purple,
    },
    {
      label: "Locations",
      selectedItems: locations,
      items: LOCATIONS,
      setState: setLocation,
      color: TagColors.Blue,
    },
    {
      label: "Subsidiary",
      selectedItems: subsidiaries,
      items: SUBSIDIARIES,
      setState: setSubsidiary,
      color: TagColors.Yellow,
    },
    {
      label: "Seniority",
      selectedItems: positionLevels,
      items: POSITION_LEVELS,
      setState: setPositionLevel,
      color: TagColors.Green,
    },
  ].filter((filter) =>
    !searchValue.trim().length
      ? true
      : {
          ...filter,
          items: filter.items.filter((item) => match(item.label, searchValue)),
        }
  );

  const groupedDocuments = GROUPED_DOCUMENTS.map(({ documents, ...group }) => ({
    ...group,
    documents: documents.filter((doc) => match(doc.name, searchValue)),
  }));

  const documents = groupedDocuments.map((group) => group.documents).flat();
  const docsCount = documents.length;

  const filterApplied = filters.some((filter) => !!filter.selectedItems.length);

  const selectedAllDocs = docsCount > 0 && docsCount === selectedDocs.length;

  const toggleAllDocs = useCallback(() => {
    setSelectedDocs(selectedAllDocs ? [] : documents);
  }, [setSelectedDocs, selectedAllDocs, documents]);

  const selectDocument = useCallback(
    (doc: Document) => {
      setSelectedDocs((selectedDocs: Document[]) => {
        const alreadySelected = selectedDocs.includes(doc);

        if (alreadySelected) {
          return selectedDocs.filter(({ id }) => id !== doc.id);
        }

        return [...selectedDocs, doc];
      });
    },
    [setSelectedDocs]
  );

  return (
    <Container className="flex-1">
      <ContainerTitle>Available Documents</ContainerTitle>

      <Input
        icon={faSearch}
        placeholder="Search"
        value={searchValue}
        onChange={onSearch}
      />

      <p>Filter by:</p>

      <div className="grid grid-cols-2 gap-3">
        {filters.map(({ color, setState, ...filter }) => (
          <Dropdown key={filter.label} onSelect={setState} {...filter} />
        ))}
        {filterApplied && (
          <Container
            className="col-span-2 items-start flex-wrap p-2"
            direction="row"
          >
            {filters.map(({ label, selectedItems, color, setState }) =>
              selectedItems.map((item) => (
                <Tag
                  key={`${label}-${item.value}`}
                  label={item.label}
                  color={color}
                  onDelete={() => deleteTag(setState, item.value)}
                />
              ))
            )}
          </Container>
        )}
      </div>

      <div className="flex items-center justify-between">
        <p>{docsCount} Available Documents</p>
        <Checkbox
          isChecked={selectedAllDocs}
          onClick={toggleAllDocs}
          color="bg-orange-600"
          label="Select All"
        />
      </div>
      <GroupedDocuments
        groups={groupedDocuments}
        selectedDocuments={selectedDocs}
        onDocumentSelect={selectDocument}
      />
    </Container>
  );
}
