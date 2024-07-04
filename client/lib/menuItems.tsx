export interface MenuState {
  name: string;
  isActive: boolean;
}

export const MENU_ITEMS:MenuState[] = [
  { name: "Most Upvotes", isActive: true },
  { name: "Least Upvotes", isActive: false },
  { name: "Most Comments", isActive: false },
  { name: "Least Comments", isActive: false },
];
