import { useQuery } from "@tanstack/react-query";

export const useFeedback = () => {
  return useQuery({
    queryKey: ["feedback"],
    queryFn: () => {
      return Promise.resolve("Scucessfully!");
    },
  });
};
