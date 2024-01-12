import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Removes conflicting TailwindCSS class names
 * @param args Normal TailwindCSS classnames passed to clsx
 * @returns properly merged TailwindCSS classes
 */
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
