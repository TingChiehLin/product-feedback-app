import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { FeedbackItem } from "./useFeedback";
import { API_BASE_URL } from "@/lib/api";

export interface FeedbackCategory {
  feedbacks: FeedbackItem[];
  id: number;
  type: string;
}

export const useCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: async (): Promise<Array<FeedbackCategory>> => {
      const response = await axios.get(`${API_BASE_URL}/categories`);
      if (response.status !== 200) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.data;
    },
  });
};
