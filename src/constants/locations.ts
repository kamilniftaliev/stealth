import { mapToDropdownItems } from "@/utils";

export const LOCATIONS = [
  "New York, NY",
  "Los Angeles, CA",
  "San Francisco, CA",
  "Miami, FL",
  "Chicago, IL",
  "Boston, MA",
  "Houston, TX",
  "Austin, TX",
].map(mapToDropdownItems);

export type Location = (typeof LOCATIONS)[0];
