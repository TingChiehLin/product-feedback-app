import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export type RandomUser = {
  results: Array<{
    picture: {
      large: string;
    };
  }>;
};

export const fetchRandomPortrait = async (): Promise<string> => {
  const response = await axios.get<RandomUser>(`https://randomuser.me/api/`);
  if (response.status !== 200) {
    throw new Error(`Request failed with status: ${response.status}`);
  }
  return response.data.results[0].picture.large;
};

export const usePortrait = (userId: string) => {
  return useQuery({
    queryKey: ["randomPortrait", userId],
    queryFn: fetchRandomPortrait,
  });
};
