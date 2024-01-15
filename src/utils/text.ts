import { faker } from '@faker-js/faker';

faker.seed(1);

/**
 * Maps a string to an object for using in an array when passing to <Dropdown items={[...]} />
 * @param label Text to map as a label
 * @returns An object for passing to <Dropdown />
 */
export function textToCollectionItem(label: string) {
  return {
    label,
    value: label.toLowerCase().replace(/\s+/g, '-') + faker.string.uuid(),
  };
}

/**
 * Searches for given search term in a string
 * @param text String to search in for a match
 * @param searchTerm Subtext to look for
 * @returns Boolean - found a match or not
 */
export function match(text: string, searchTerm: string) {
  const term = searchTerm.trim();

  if (!term) return true;

  return text.trim().toLowerCase().includes(term.toLowerCase());
}
