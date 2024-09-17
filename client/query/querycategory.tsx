import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { FeedbackItem } from "./useFeedback";

export interface FeedbackCategory {
  feedbacks: FeedbackItem[];
  id: number;
  type: string;
  isActive?: boolean;
}

// export interface CategoryType {
//   name: string;
//   isActive: boolean;
// }

// export const CATEGORIES: CategoryType[] = [
//   { name: "UI", isActive: false },
//   { name: "UX", isActive: true },
//   { name: "Enhancement", isActive: false },
//   { name: "Bug", isActive: false },
//   { name: "Feature", isActive: false },
// ];

export const useCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: async (): Promise<Array<FeedbackCategory>> => {
      const response = await axios.get("http://127.0.0.1:5555/categories");
      if (response.status !== 200) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.data;
    },
  });
};
