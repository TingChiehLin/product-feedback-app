import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { RoadmapItemStatus } from "@/components/RoadmapItem";

export interface Category {
  id: number;
  type: string;
}

export interface Comment {
  id: number;
  feedback_id: number;
  user_id: number;
  description: string;
}

export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  role: string;
  created_at: string;
}

export interface FeedbackItem {
  id: number;
  title: string;
  description: string;
  status: RoadmapItemStatus;
  upvote: number;
  user_id: number;
  user: User;
  category_id: number;
  category: Category;
  comments: Comment[];
}

export const useFeedback = () => {
  return useQuery({
    queryKey: ["feedback"],
    queryFn: async (): Promise<Array<FeedbackItem>> => {
      // const response = await fetch("http://127.0.0.1:5555/feedbacks");
      const response = await axios.get("http://127.0.0.1:5555/feedbacks");
      if (response.status !== 200) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.data;
    },
  });
};
