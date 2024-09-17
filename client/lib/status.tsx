// export type StatusType = {
//   name: string;
//   isActive: boolean;
// };

// export const STATUS: StatusType[] = [
//   { name: "Planned", isActive: true },
//   { name: "In-Progress", isActive: false },
//   { name: "Live", isActive: false },
// ];

export type Status = {
  type: string;
  isActive?: boolean;
};

export const STATUS: Status[] = [
  { type: "Planned", isActive: true },
  { type: "In-Progress", isActive: false },
  { type: "Live", isActive: false },
];
