import { User } from "@supabase/supabase-js";

export type ReviewType = {
  content: string;
  stars: number;
  date: string;
  user: User;
};
