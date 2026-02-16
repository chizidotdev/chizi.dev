import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (date: Date | number, options?: Intl.DateTimeFormatOptions) => {
  return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", ...options }).format(
    new Date(date)
  );
};
