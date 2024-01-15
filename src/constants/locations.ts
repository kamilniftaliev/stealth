import { textToCollectionItem } from "@/utils";
import { faker } from "@faker-js/faker";

faker.seed(1);

export const LOCATIONS = Array(50)
  .fill(null)
  .map(
    () =>
      `${faker.location.city()}, ${faker.location.state({ abbreviated: true })}`
  )
  .map(textToCollectionItem);

export type Location = (typeof LOCATIONS)[0];
