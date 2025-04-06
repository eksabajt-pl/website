export type ReviewType = {
  content: string;
  stars: number;
  date: string;
  user: {
    avatar_url: string;
    full_name: string;
  };
};
