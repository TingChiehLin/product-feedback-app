export interface CategoryType {
  name: string;
  isActive: boolean;
}

export const CATEGORIES: CategoryType[] = [
  { name: "UI", isActive: false },
  { name: "UX", isActive: true },
  { name: "Enhancement", isActive: false },
  { name: "Bug", isActive: false },
  { name: "Feature", isActive: false },
];
