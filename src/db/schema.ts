import {
  timestamp,
  pgTable,
  text,
  smallint,
  uuid,
  pgEnum,
  serial,
  boolean,
} from "drizzle-orm/pg-core";

export const groupEnum = pgEnum("user_group", ["admin", "user"]);

export const profilesTable = pgTable("profile", {
  id: uuid("id").primaryKey(),
  fullName: text("full_name"),
  email: text("email").notNull(),
  avatarUrl: text("avatar_url").notNull(),
  userGroup: groupEnum("user_group").default("user"),
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
  isVerified: boolean("is_verified").notNull().default(false),
});

export type InsertProfile = typeof profilesTable.$inferInsert;
export type SelectProfile = typeof profilesTable.$inferSelect;

export type InsertReview = typeof reviewsTable.$inferInsert;
export type SelectReview = typeof reviewsTable.$inferSelect;

export type SelectReviewWithProfile = {
  review: SelectReview;
  profile: SelectProfile;
};
