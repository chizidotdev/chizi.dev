import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: Date | number) => {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date);
};
