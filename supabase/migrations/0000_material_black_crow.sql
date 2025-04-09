CREATE TYPE "public"."user_group" AS ENUM('admin', 'user');--> statement-breakpoint
CREATE TYPE "public"."review_status" AS ENUM('approved', 'rejected', 'pending');--> statement-breakpoint
CREATE TABLE "profile" (
	"id" uuid PRIMARY KEY NOT NULL,
	"full_name" text,
	"email" text NOT NULL,
	"avatar_url" text NOT NULL,
	"user_group" "user_group" DEFAULT 'user'
);
--> statement-breakpoint
CREATE TABLE "review" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"user_id" uuid NOT NULL,
	"content" text NOT NULL,
	"stars" smallint DEFAULT 5 NOT NULL,
	"is_verified" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
ALTER TABLE "review" ADD CONSTRAINT "review_user_id_profile_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profile"("id") ON DELETE cascade ON UPDATE no action;