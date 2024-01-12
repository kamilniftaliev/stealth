import { mapToDropdownItems } from "@/utils";

export const POSITION_LEVELS = [
  "Entry-Level Position",
  "Individual Contributor",
  "Manager",
  "Office Staff",
  "Leadership / Management",
].map(mapToDropdownItems);

export type PositionLevel = (typeof POSITION_LEVELS)[0];
