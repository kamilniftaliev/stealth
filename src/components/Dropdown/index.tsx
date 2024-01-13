import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { faChevronDown, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";

import { Container, ContainerTitle, Icon, Input } from "..";
import { useOutsideClick } from "@/hooks";
import { cn, match } from "@/utils";

type DropdownItem = {
  /** Unique value for each dropdown item */
  value: string;

  /** Actual text of the dropdown item */
  label: string;
};

type Props = {
  label: string;
  items: DropdownItem[];
  onSelect: (item: DropdownItem[]) => void;
  selectedItems?: DropdownItem[];
};

export function Dropdown({
  label,
  onSelect,
  selectedItems = [],
  items: originalItems,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState(originalItems);

  const close = useCallback(() => setIsOpen(false), []);
  const open = useCallback(() => setIsOpen(true), []);

  const containerRef = useOutsideClick(close);

  useEffect(() => {
    setItems(originalItems);
  }, [originalItems]);

  const updateSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleSelect = useCallback(
    (item: DropdownItem) => {
      onSelect([...selectedItems, item]);
    },
    [onSelect, selectedItems]
  );

  const filteredItems = useMemo(
    () =>
      items.filter(({ label, value }) => {
        const isSelected = selectedItems.some((item) => item.value === value);

        return isSelected ? false : match(label, searchTerm);
      }),
    [items, searchTerm, selectedItems]
  );

  const noResults = !filteredItems.length;

  return (
    <div className="md:relative select-none flex-grow" ref={containerRef}>
      <Container
        onClick={open}
        direction="row"
        className="py-2 px-2.5 justify-between items-center cursor-pointer"
      >
        <span className="overflow-hidden text-nowrap text-ellipsis">
          {label}
        </span>
        <Icon icon={faChevronDown} />
      </Container>
      <Container
        className={cn(
          "fixed md:absolute top-0 md:top-full left-0 md:left-auto md:mt-2 w-screen md:w-auto h-screen md:h-auto md:shadow-2xl transition-all z-10 px-1 pb-2 visible md:max-w-md",
          !isOpen && "-scale-50 md:scale-100 md:-translate-y-3 opacity-0 invisible duration-300"
        )}
      >
        <div className="flex justify-between items-center px-4 md:hidden">
          <ContainerTitle className="text-2xl">{label}</ContainerTitle>
          <Icon icon={faClose} className="text-3xl" onClick={close} />
        </div>
        <div className="px-3">
          <Input
            icon={faSearch}
            placeholder="Search"
            value={searchTerm}
            onChange={updateSearch}
          />
        </div>
        {noResults ? (
          <p className="py-2 text-center">No Results</p>
        ) : (
          <ul className="flex flex-col gap-y-1 md:max-h-96 overflow-y-auto px-2">
            {filteredItems.map((item) => (
              <li
                onClick={() => handleSelect(item)}
                key={item.value}
                className="py-2 px-2 font-medium cursor-pointer
                overflow-hidden text-ellipsis text-nowrap
                shrink-0 hover:bg-orange-50 rounded-md"
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </Container>
    </div>
  );
}
