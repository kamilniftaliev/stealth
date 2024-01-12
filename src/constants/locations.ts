import { textToCollectionItem } from "@/utils";

export const LOCATIONS = [
  "New York, NY",
  "Los Angeles, CA",
  "San Francisco, CA",
  "Miami, FL",
  "Chicago, IL",
  "Boston, MA",
  "Houston, TX",
  "Austin, TX",
].map(textToCollectionItem);

export type Location = (typeof LOCATIONS)[0];
