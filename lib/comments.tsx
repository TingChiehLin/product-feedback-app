import { RoadmapItemStatus } from "../components/RoadmapItem";

export interface commentType {
  id: number;
  title: string;
  description: string;
  voteNum: number;
  tagName: string;
  commentNum: number;
  status: RoadmapItemStatus;
}

export const COMMENTS: commentType[] = [
  {
    id: 0,
    title: "Add tags for solutions",
    description: "Easier to search for solutions based on a specific stack.",
    voteNum: 112,
    tagName: "Enhancement",
    commentNum: 2,
    status: "Planned",
  },
  {
    id: 1,
    title: "More comprehensive reports",
    description:
      "It would be great to see a more detailed breakdown of solutions.",
    voteNum: 123,
    tagName: "Feature",
    commentNum: 3,
    status: "Planned",
  },
  {
    id: 2,
    title: "Ability to follow others",
    description: "Stay updated on comments and solutions other people post.",
    voteNum: 65,
    tagName: "UX",
    commentNum: 5,
    status: "In Progress",
  },
  {
    id: 3,
    title: "Q&A within the challenge hubs",
    description: "Challenge-specific Q&A would make for easy reference.",
    voteNum: 96,
    tagName: "Feature",
    commentNum: 3,
    status: "Live",
  },
  {
    id: 4,
    title: "Q&A within the challenge hubs",
    description: "Challenge-specific Q&A would make for easy reference.",
    voteNum: 96,
    tagName: "Feature",
    commentNum: 3,
    status: "Live",
  },
];
