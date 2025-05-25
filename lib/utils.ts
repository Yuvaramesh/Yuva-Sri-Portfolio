import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const condition = true;

const className = cn("px-4", "py-2", condition && "bg-red-500", "px-6");

console.log(className); // Output: "py-2 bg-red-500 px-6"
