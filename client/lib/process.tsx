import { ProcessType } from "../components/ProcessStatus";

interface ProcessDataType {
  title: ProcessType,
  number: number,
}

export const process:ProcessDataType[] = [
  { title: "Planned", number: 2 },
  { title: "In-Progress", number: 3 },
  { title: "Live", number: 1 },
];
