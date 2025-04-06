export type ReviewType = {
  content: string;
  stars: number;
  date: string;
  user: {
    full_name: string;
  };
};
