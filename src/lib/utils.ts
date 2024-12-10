import { type ClassValue, clsx } from "clsx";
import dateTime from "date-and-time";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (
  dateObj: Date | string,
  formatString: string = "ddd, MMM DD YYYY",
  utc?: boolean | undefined
): string => {
  const date = new Date(dateObj);

  const value = dateTime.format(date, formatString, utc);
  return value;
};
