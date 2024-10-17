import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  role: string;
  img_url: string;
  created_at: string;
}

export const fetchUser = async (): Promise<Array<User>> => {
  const response = await axios.get("http://127.0.0.1:5555/users");
  if (response.status !== 200) {
    throw new Error(`Request failed with status: ${response.status}`);
  }
  return response.data;
};

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
};
