import { TabData } from "../../../layout/tabs/Tabs";
import HomeTab from "./HomeTab";
import ExperienceTab from "./ExperienceTab";
import EducationTab from "./EducationTab";

export const TAB_CONFIGS: Record<string, TabData[]> = {
  welcome: [
    {
      id: "about-me",
      label: "About Me",
      content: HomeTab,
    },
    {
      id: "experience",
      label: "Experience",
      content: ExperienceTab,
    },
    {
      id: "education",
      label: "Education & Certifications",
      content: EducationTab,
    },
  ],
};
