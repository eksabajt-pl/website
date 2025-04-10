import {
  pgTable,
  uuid,
  text,
  foreignKey,
  serial,
  timestamp,
  smallint,
  pgEnum,
  integer,
} from "drizzle-orm/pg-core";
export const reviewType = pgEnum("review_type", [
  "pending",
  "rejected",
  "verified",
]);
export const userGroup = pgEnum("user_group", ["admin", "user"]);

export const profile = pgTable("profile", {
  id: uuid().primaryKey().notNull(),
  fullName: text("full_name"),
  email: text().notNull(),
  avatarUrl: text("avatar_url").notNull(),
  userGroup: userGroup("user_group").default("user"),
});

export const review = pgTable(
  "review",
  {
    id: serial().primaryKey().notNull(),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
    userId: uuid("user_id").notNull(),
    content: text().notNull(),
    stars: smallint().default(5).notNull(),
    status: reviewType("status").default("pending"),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [profile.id],
      name: "review_user_id_profile_id_fk",
    }).onDelete("cascade"),
  ]
);
export const project = pgTable("project", {
  id: serial().primaryKey().notNull(),
  created_at: timestamp("created_at", { withTimezone: true }),
  user_id: uuid("user_id"),
  type: text("type"),
  phase: text("phase"),
  link: text("link"),
  price: integer(),
  email: text(),
});
export type SelectProject = typeof project.$inferSelect;
export type SelectProfile = typeof profile.$inferSelect;
export type SelectReview = typeof review.$inferSelect;

export type SelectReviewWithProfile = {
  review: typeof review.$inferSelect;
  profile: typeof profile.$inferSelect;
};
export type SelectProjectWithProfile = {
  Project: typeof project.$inferSelect;
  Profile: typeof profile.$inferSelect;
};
export type InsertProject = typeof project.$inferInsert;
export type InsertProfile = typeof profile.$inferInsert;
export type InsertReview = typeof review.$inferInsert;
