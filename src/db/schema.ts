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

export const profilesTable = pgTable("profiles", {
  id: uuid("id").primaryKey(),
  fullName: text("full_name"),
  email: text("email"),
  avatar_url: text("avatar_url"),
  user_group: groupEnum("user_group").notNull().default("user"),
  registered_with: text("registered_with"),
});

export const reviewsTable = pgTable("reviews", {
  id: serial().primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  userId: uuid("user_id")
    .notNull()
    .references(() => profilesTable.id, { onDelete: "cascade" }),
  content: text("content"),
  stars: smallint("stars").default(5),
});

export type InsertProfile = typeof profilesTable.$inferInsert;
export type SelectProfile = typeof profilesTable.$inferSelect;

export type InsertReview = typeof reviewsTable.$inferInsert;
export type SelectReview = typeof reviewsTable.$inferSelect;
