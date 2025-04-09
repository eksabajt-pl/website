import { relations } from "drizzle-orm/relations";
import { profile, review } from "./schema";

export const reviewRelations = relations(review, ({one}) => ({
	profile: one(profile, {
		fields: [review.userId],
		references: [profile.id]
	}),
}));

export const profileRelations = relations(profile, ({many}) => ({
	reviews: many(review),
}));