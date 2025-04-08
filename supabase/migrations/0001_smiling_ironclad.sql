CREATE TYPE "public"."user_group" AS ENUM('admin', 'user');--> statement-breakpoint
ALTER TABLE "profiles" RENAME TO "profile";--> statement-breakpoint
ALTER TABLE "reviews" RENAME TO "review";--> statement-breakpoint
ALTER TABLE "review" DROP CONSTRAINT "reviews_user_id_profiles_id_fk";
--> statement-breakpoint
ALTER TABLE "profile" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "profile" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "profile" ALTER COLUMN "avatar_url" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "profile" ALTER COLUMN "user_group" SET DATA TYPE user_group;--> statement-breakpoint
ALTER TABLE "profile" ALTER COLUMN "user_group" SET DEFAULT 'user';--> statement-breakpoint
ALTER TABLE "review" ALTER COLUMN "created_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "review" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "review" ALTER COLUMN "user_id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "review" ALTER COLUMN "content" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "review" ALTER COLUMN "stars" SET DATA TYPE smallint;--> statement-breakpoint
ALTER TABLE "review" ALTER COLUMN "stars" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "review" ADD COLUMN "is_verified" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "review" ADD CONSTRAINT "review_user_id_profile_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."profile"("id") ON DELETE cascade ON UPDATE no action;