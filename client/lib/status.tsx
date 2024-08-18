export type StatusType = {
  name: string;
  isActive: boolean;
};

export const STATUS: StatusType[] = [
  { name: "Planned", isActive: true },
  { name: "In-Progress", isActive: false },
  { name: "Live", isActive: false },
];
