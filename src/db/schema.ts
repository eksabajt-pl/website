import {
  timestamp,
  pgTable,
  text,
  smallint,
  uuid,
  pgEnum,
  serial,
} from "drizzle-orm/pg-core";

export const groupEnum = pgEnum("user_group", ["admin", "user"]);

export const profilesTable = pgTable("profile", {
  id: uuid("id").primaryKey(),
  fullName: text("full_name"),
  email: text("email").notNull(),
  avatarUrl: text("avatar_url").notNull(),
  userGroup: groupEnum("user_group").notNull().default("user"),
  registeredWith: text("registered_with"),
});

export const reviewsTable = pgTable("review", {
  id: serial().primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  userId: uuid("user_id")
    .notNull()
    .references(() => profilesTable.id, { onDelete: "cascade" }),
  content: text("content").notNull(),
  stars: smallint("stars").notNull().default(5),
});

export type InsertProfile = typeof profilesTable.$inferInsert;
export type SelectProfile = typeof profilesTable.$inferSelect;

export type InsertReview = typeof reviewsTable.$inferInsert;
export type SelectReview = typeof reviewsTable.$inferSelect;

export type SelectReviewWithProfile = {
  review: SelectReview;
  profile: SelectProfile;
};
