"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  ContainerTitle,
  Document,
  Dropdown,
  GROUPED_DOCUMENTS,
  GroupedDocuments,
  Input,
  SelectedDocuments,
  Tag,
  TagColors,
} from "@/components";
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
  SUBSIDIARIES,
  Subsidiary,
  POSITION_LEVELS,
  PositionLevel,
} from "@/constants";
import { Checkbox } from "@/components/Checkbox";
import { match } from "@/utils";

type SetState = Dispatch<
  SetStateAction<Array<JobTemplate | Location | Subsidiary | PositionLevel>>
>;

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedAllDocs, setSelectedAllDocs] = useState(false);
  const [jobTemplates, setJobTemplate] = useState<JobTemplate[]>([]);
  const [locations, setLocation] = useState<Location[]>([]);
  const [subsidiaries, setSubsidiary] = useState<Subsidiary[]>([]);
  const [positionLevels, setPositionLevel] = useState<PositionLevel[]>([]);
  const [selectedDocs, setSelectedDocs] = useState<Document[]>([]);

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

  const filterApplied = filters.some((filter) => !!filter.selectedItems.length);

  const toggleAllDocs = useCallback(() => {
    setSelectedAllDocs((isChecked) => !isChecked);
  }, []);

  const handleDocumentSelect = useCallback((doc: Document) => {
    setSelectedDocs((selectedDocs: Document[]) => {
      const alreadySelected = selectedDocs.includes(doc);

      if (alreadySelected) {
        return selectedDocs.filter(({ id }) => id !== doc.id);
      }

      return [...selectedDocs, doc];
    });
  }, []);

  const unselectDocument = useCallback((docId: Document["id"]) => {
    setSelectedDocs((selectedDocs: Document[]) =>
      selectedDocs.filter(({ id }) => id !== docId)
    );
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-between p-24 gap-y-6">
      <Container className="p-6">
        <ContainerTitle className="text-lg font-semibold">
          Which agreements, forms and notices should be sent to Jason Smith?
        </ContainerTitle>
        <ContainerTitle className="">
          Employees assigned to this job type will be required to review, where
          relevant fill-in, and sign the following agreements and notices:
        </ContainerTitle>
      </Container>
      <div className="flex flex-col gap-y-2">
        <p className="font-medium">
          Select the agreements, notices and documents you want Jason Smith to
          sign
        </p>
        <div className="flex gap-6 w-full">
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
              <p>53 Available Documents</p>
              <Checkbox
                isChecked={selectedAllDocs}
                onClick={toggleAllDocs}
                color="bg-orange-600"
                label="Select All"
              />
            </div>
            <GroupedDocuments
              groups={GROUPED_DOCUMENTS}
              selectedDocuments={selectedDocs}
              onDocumentSelect={handleDocumentSelect}
            />
          </Container>
          <SelectedDocuments
            documents={selectedDocs}
            unselect={unselectDocument}
          />
        </div>
      </div>
    </main>
  );
}
