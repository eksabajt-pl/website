export type ReviewType = {
  content: string;
  stars: number;
  date: string;
  created_at: string;
  user: {
    avatar_url: string;
    full_name: string;
  };
};
