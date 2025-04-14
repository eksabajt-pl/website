import { relations } from "drizzle-orm/relations";
import {
  portfolio,
  portfolioTech,
  profile,
  project,
  review,
  portfolioImage,
  tech,
  portfolioFeature,
} from "./schema";

export const portfolioTechRelations = relations(portfolioTech, ({ one }) => ({
  tech: one(tech, {
    fields: [portfolioTech.techId],
    references: [tech.id],
  }),
  portfolio: one(portfolio, {
    fields: [portfolioTech.portfolioId],
    references: [portfolio.id],
  }),
}));

export const portfolioFeatureRelations = relations(
  portfolioFeature,
  ({ one }) => ({
    portfolio: one(portfolio, {
      fields: [portfolioFeature.portfolioId],
      references: [portfolio.id],
    }),
  })
);

export const portfolioImageRelations = relations(portfolioImage, ({ one }) => ({
  portfolio: one(portfolio, {
    fields: [portfolioImage.portfolioId],
    references: [portfolio.id],
  }),
}));

export const techRelations = relations(tech, ({ many }) => ({
  portfolios: many(portfolioTech),
  techs: many(tech),
}));

export const portfolioRelations = relations(portfolio, ({ many }) => ({
  portfolioFeatures: many(portfolioFeature),
  portfolioImages: many(portfolioImage),
  portfolioTech: many(portfolioTech),
}));

export const projectRelations = relations(project, ({ one }) => ({
  profile: one(profile, {
    fields: [project.userId],
    references: [profile.id],
  }),
}));

export const profileRelations = relations(profile, ({ many }) => ({
  projects: many(project),
  reviews: many(review),
}));

export const reviewRelations = relations(review, ({ one }) => ({
  profile: one(profile, {
    fields: [review.userId],
    references: [profile.id],
  }),
}));
