import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";

import { Container, Icon, Input } from "..";
import { useOutsideClick } from "@/hooks";
import { cn } from "@/utils";

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

        if (isSelected) return false;

        const matchesSearch = label
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

        return matchesSearch;
      }),
    [items, searchTerm, selectedItems]
  );

  const noResults = !filteredItems.length;

  return (
    <div className="relative select-none flex-grow" ref={containerRef}>
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
          "absolute top-full -left-1/2 mt-2 shadow-2xl transition-all z-10 px-1 pb-2 visible max-w-md",
          !isOpen && "-translate-y-3 opacity-0 invisible"
        )}
      >
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
          <ul className="flex flex-col gap-y-1 max-h-96 overflow-y-auto px-2">
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
