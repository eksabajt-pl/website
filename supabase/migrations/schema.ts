import {
  pgTable,
  foreignKey,
  bigint,
  timestamp,
  uuid,
  text,
  integer,
  serial,
  smallint,
  pgEnum,
} from "drizzle-orm/pg-core";

export const reviewType = pgEnum("review_type", [
  "pending",
  "rejected",
  "verified",
]);
export const userGroup = pgEnum("user_group", ["admin", "user"]);

export const portfolioTech = pgTable(
  "portfolio_tech",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint({ mode: "number" })
      .primaryKey()
      .generatedByDefaultAsIdentity({
        name: "portfolio_tech_id_seq",
        startWith: 1,
        increment: 1,
        minValue: 1,
        maxValue: 9223372036854775807,
        cache: 1,
      }),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    portfolioId: bigint("portfolio_id", { mode: "number" }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    techId: bigint("tech_id", { mode: "number" }).notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.portfolioId],
      foreignColumns: [portfolio.id],
      name: "portfolio_tech_portfolio_id_fkey",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
    foreignKey({
      columns: [table.techId],
      foreignColumns: [table.id],
      name: "portfolio_tech_tech_id_fkey",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ]
);

export const project = pgTable(
  "project",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint({ mode: "number" })
      .primaryKey()
      .generatedByDefaultAsIdentity({
        name: "project_id_seq",
        startWith: 1,
        increment: 1,
        minValue: 1,
        maxValue: 92233720368547,
        cache: 1,
      }),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
    userId: uuid("user_id"),
    type: text(),
    phase: text().default("Unpaid"),
    link: text(),
    price: integer(),
    email: text(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [profile.id],
      name: "project_user_id_fkey",
    }),
  ]
);

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
    status: reviewType().default("pending"),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [profile.id],
      name: "review_user_id_profile_id_fk",
    }).onDelete("cascade"),
  ]
);

export const ban = pgTable("ban", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint({ mode: "number" })
    .primaryKey()
    .generatedByDefaultAsIdentity({
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
  email: text().notNull(),
});

export const portfolio = pgTable("portfolio", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint({ mode: "number" })
    .primaryKey()
    .generatedByDefaultAsIdentity({
      name: "portfolio_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 9223372036854775807,
      cache: 1,
    }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  title: text(),
  description: text(),
  githubUrl: text("github_url"),
  liveUrl: text("live_url"),
  author: text(),
});

export const portfolioImage = pgTable(
  "portfolio_image",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint({ mode: "number" })
      .primaryKey()
      .generatedByDefaultAsIdentity({
        name: "portfolio_image_id_seq",
        startWith: 1,
        increment: 1,
        minValue: 1,
        maxValue: 9223372036854775807,
        cache: 1,
      }),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
    path: text(),
    label: text(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    portfolioId: bigint("portfolio_id", { mode: "number" }).notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.portfolioId],
      foreignColumns: [portfolio.id],
      name: "portfolio_image_portfolio_id_fkey",
    })
      .onUpdate("cascade")
      .onDelete("cascade"),
  ]
);

export const tech = pgTable("tech", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint({ mode: "number" })
    .primaryKey()
    .generatedByDefaultAsIdentity({
      name: "technologies_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 9223372036854775807,
      cache: 1,
    }),
  name: text(),
  icon: text(),
});
