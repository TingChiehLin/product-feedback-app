import { RoadmapItemStatus } from "../components/RoadmapItem";

interface RoadmapSectionDataType {
  title: string;
  subTitle: string;
  status: RoadmapItemStatus;
}

export const roadmapsections: RoadmapSectionDataType[] = [
  {
    title: "Planned",
    subTitle: "Ideas prioritized for research",
    status: "Planned",
  },
  {
    title: "In-Progress",
    subTitle: "Currently being developed",
    status: "In Progress",
  },
  {
    title: "Live",
    subTitle: "Released features",
    status: "Live",
  },
];
