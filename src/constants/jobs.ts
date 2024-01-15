import { textToCollectionItem } from '@/utils';
import { faker } from '@faker-js/faker';

faker.seed(1);

export const JOB_TEMPLATES = Array(50)
  .fill(null)
  .map(faker.person.jobTitle)
  .map(textToCollectionItem);

export type JobTemplate = (typeof JOB_TEMPLATES)[0];
