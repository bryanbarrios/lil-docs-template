import { Section } from "@/types";

export const findSectionByPath = (
  path: string,
  sections: Section[]
): string | undefined => {
  for (const section of sections) {
    for (const route of section.routes) {
      if (route.path === path) {
        return section.section;
      }
    }
  }
};
