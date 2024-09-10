import { useQuery } from "@tanstack/react-query";

// Category interface
export interface Category {
  id: number;
  type: string;
}

// Comment interface
export interface Comment {
  id: number;
  feedback_id: number;
  description: string;
  user_id: number;
}

// User interface
export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  role: string;
  created_at: string;
}

export interface FeedbackData {
  id: number;
  title: string;
  description: string;
  status: string;
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
    queryFn: async (): Promise<Array<FeedbackData>> => {
      const response = await fetch("http://127.0.0.1:5555/feedbacks");
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.json();
    },
  });
};
