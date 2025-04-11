import {
  ban,
  profile,
  portfolio,
  portfolioImage,
  portfolioTech,
  review,
  tech,
} from "./schema";

export type SelectTech = typeof tech.$inferSelect;

export type SelectPortfolio = typeof portfolio.$inferSelect;
export type SelectPortfolioImage = typeof portfolioImage.$inferSelect;
export type SelectPortfolioTech = typeof portfolioTech.$inferSelect;

export type SelectBan = typeof ban.$inferSelect;
export type InsertBan = typeof ban.$inferInsert;

export type SelectProfile = typeof profile.$inferSelect;
export type SelectReview = typeof review.$inferSelect;

export type SelectReviewWithProfile = {
  review: typeof review.$inferSelect;
  profile: typeof profile.$inferSelect;
};

export type InsertProfile = typeof profile.$inferInsert;
export type InsertReview = typeof review.$inferInsert;
