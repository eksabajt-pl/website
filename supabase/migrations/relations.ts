import { relations } from "drizzle-orm/relations";
import { portfolio, portfolioTech, profile, project, review, portfolioImage } from "./schema";

export const portfolioTechRelations = relations(portfolioTech, ({one, many}) => ({
	portfolio: one(portfolio, {
		fields: [portfolioTech.portfolioId],
		references: [portfolio.id]
	}),
	portfolioTech: one(portfolioTech, {
		fields: [portfolioTech.techId],
		references: [portfolioTech.id],
		relationName: "portfolioTech_techId_portfolioTech_id"
	}),
	portfolioTeches: many(portfolioTech, {
		relationName: "portfolioTech_techId_portfolioTech_id"
	}),
}));

export const portfolioRelations = relations(portfolio, ({many}) => ({
	portfolioTeches: many(portfolioTech),
	portfolioImages: many(portfolioImage),
}));

export const projectRelations = relations(project, ({one}) => ({
	profile: one(profile, {
		fields: [project.userId],
		references: [profile.id]
	}),
}));

export const profileRelations = relations(profile, ({many}) => ({
	projects: many(project),
	reviews: many(review),
}));

export const reviewRelations = relations(review, ({one}) => ({
	profile: one(profile, {
		fields: [review.userId],
		references: [profile.id]
	}),
}));

export const portfolioImageRelations = relations(portfolioImage, ({one}) => ({
	portfolio: one(portfolio, {
		fields: [portfolioImage.portfolioId],
		references: [portfolio.id]
	}),
}));