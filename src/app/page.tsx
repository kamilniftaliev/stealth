"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  ContainerTitle,
  Dropdown,
  Input,
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

type SetState = Dispatch<
  SetStateAction<Array<JobTemplate | Location | Subsidiary | PositionLevel>>
>;

export default function Home() {
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
  ];

  const filterApplied = filters.some((filter) => !!filter.selectedItems.length);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <Container>
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
      </Container>
    </main>
  );
}
