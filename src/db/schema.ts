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

export const Profile = pgTable("profile", {
  id: uuid("id").primaryKey(),
  fullName: text("full_name"),
  email: text("email").notNull(),
  avatarUrl: text("avatar_url").notNull(),
  userGroup: groupEnum("user_group").default("user"),
});

export const Review = pgTable("review", {
  id: serial().primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  userId: uuid("user_id")
    .notNull()
    .references(() => Profile.id, { onDelete: "cascade" }),
  content: text("content").notNull(),
  stars: smallint("stars").notNull().default(5),
  isVerified: boolean("is_verified").notNull().default(false),
});

export type InsertProfile = typeof Profile.$inferInsert;
export type SelectProfile = typeof Profile.$inferSelect;

export type InsertReview = typeof Review.$inferInsert;
export type SelectReview = typeof Review.$inferSelect;

export type SelectReviewWithProfile = {
  review: SelectReview;
  profile: SelectProfile;
};
