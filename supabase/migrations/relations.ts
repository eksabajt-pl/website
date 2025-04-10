import { relations } from "drizzle-orm/relations";
import { profile, project, review, usersInAuth, ban } from "./schema";

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

export const usersInAuthRelations = relations(usersInAuth, ({ many }) => ({
  bans: many(ban),
}));
