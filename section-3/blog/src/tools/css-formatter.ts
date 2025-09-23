import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cssFormatter(...css_list: ClassValue[]) {
  const css_joined = clsx(css_list);
  const css_purged = twMerge(css_joined);
  return css_purged;
}
