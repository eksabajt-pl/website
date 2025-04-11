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
  bigint,
  pgSchema,
  boolean,
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

export const project = pgTable("project", {
  id: bigint({ mode: "bigint" })
    .primaryKey()
    .generatedByDefaultAsIdentity({
      name: "project_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 92233720368547,
      cache: 1,
    })
    .primaryKey()
    .notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  userId: uuid("user_id"),
  type: text(),
  phase: text().default("Unpaid"),
  link: text(),
  price: integer(),
  email: text(),
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
const authSchema = pgSchema("auth");

const users = authSchema.table("users", {
  id: uuid("id").primaryKey(),
});
export const usersInAuth = users;

export const ban = pgTable("ban", {
  id: bigint({ mode: "bigint" }).primaryKey().generatedByDefaultAsIdentity({
    name: "ban_id_seq",
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 92233720368547,
    cache: 1,
  }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  email: text("email").notNull().unique(),
});

export const portfolio = pgTable("portfolio", {
  id: bigint({ mode: "bigint" }).primaryKey().generatedByDefaultAsIdentity({
    name: "portfolio_id_seq",
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 922337203685477,
    cache: 1,
  }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  title: text().notNull(),
  draft: boolean().notNull().default(true),
  overview: text(),
  shortDescription: text().notNull().default("Lorem ipsum dolor sit amet"),
  description: text().notNull().default(""),
  githubUrl: text("github_url").notNull(),
  liveUrl: text("live_url").notNull(),
  author: text().notNull().default("Cały zespół"),
});

export const portfolioImage = pgTable("portfolio_image", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint({ mode: "bigint" }).primaryKey().generatedByDefaultAsIdentity({
    name: "portfolio_image_id_seq",
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 922337203685477,
    cache: 1,
  }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  path: text(),
  label: text(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  portfolioId: bigint("portfolio_id", { mode: "bigint" })
    .notNull()
    .references(() => portfolio.id),
});

export const tech = pgTable("tech", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint({ mode: "bigint" }).primaryKey().generatedByDefaultAsIdentity({
    name: "technologies_id_seq",
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 922337203685477,
    cache: 1,
  }),
  name: text().notNull(),
  icon: text().notNull(),
});

export const portfolioTech = pgTable("portfolio_tech", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint({ mode: "bigint" }).generatedByDefaultAsIdentity({
    name: "portfolio_tech_id_seq",
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 922337203685477,
    cache: 1,
  }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  portfolioId: bigint("portfolio_id", { mode: "bigint" })
    .notNull()
    .references(() => portfolio.id),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  techId: bigint("tech_id", { mode: "bigint" })
    .notNull()
    .references(() => tech.id),
});
