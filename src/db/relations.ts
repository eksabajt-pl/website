import { relations } from "drizzle-orm/relations";
import { profile, review, project } from "./schema";

export const reviewRelations = relations(review, ({ one }) => ({
  profile: one(profile, {
    fields: [review.userId],
    references: [profile.id],
  }),
}));

export const profileRelations = relations(profile, ({ many }) => ({
  reviews: many(review),
}));
export const projectRelations = relations(project, ({ one }) => ({
  profile: one(profile, {
    fields: [project.user_id],
    references: [profile.id],
  }),
}));
