/**
 * Maps a string to an object for using in an array when passing to <Dropdown items={[...]} />
 * @param label Text to map as a label
 * @returns An object for passing to <Dropdown />
 */
export function mapToDropdownItems(label: string) {
  return {
    label,
    value: label.toLowerCase().replace(/\s+/g, "-"),
  };
}
