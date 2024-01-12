import { mapToDropdownItems } from "@/utils";

export const SUBSIDIARIES = [
  "Subsidiary example 1",
  "Subsidiary example 2",
  "Subsidiary example 3",
  "Subsidiary example 4",
  "Subsidiary example 5",
  "Subsidiary example 6",
  "Subsidiary example 7",
  "Subsidiary example 8",
].map(mapToDropdownItems);

export type Subsidiary = (typeof SUBSIDIARIES)[0];
