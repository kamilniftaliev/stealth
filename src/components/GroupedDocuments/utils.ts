import { textToCollectionItem } from "@/utils";
import { CITIES } from "./constants";

export function generateDocumentsForCity(documentName: string) {
  return CITIES.map((city) => `${city} ${documentName}`).map((documentName) => {
    const { value: id, label: name } = textToCollectionItem(documentName);

    return {
      id,
      name,
    };
  });
}
