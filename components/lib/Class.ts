import { compareDesc, parseISO } from "date-fns";

export const cx = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};
