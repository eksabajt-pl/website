CREATE TABLE IF NOT EXISTS  "profiles" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"email" text,
	"avatar_url" text,
	"user_group" text,
	"registered_with" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reviews" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"user_id" text NOT NULL,
	"content" text,
	"stars" integer DEFAULT 5
);
--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_user_id_profiles_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;