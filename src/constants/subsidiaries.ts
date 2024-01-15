import { textToCollectionItem } from '@/utils';
import { faker } from '@faker-js/faker';

faker.seed(1);

export const SUBSIDIARIES = Array(50)
  .fill(null)
  .map(faker.company.name)
  .map(textToCollectionItem);

export type Subsidiary = (typeof SUBSIDIARIES)[0];
