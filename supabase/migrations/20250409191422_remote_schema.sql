create schema if not exists "drizzle";

create sequence "drizzle"."__drizzle_migrations_id_seq";

create table "drizzle"."__drizzle_migrations" (
    "id" integer not null default nextval('drizzle.__drizzle_migrations_id_seq'::regclass),
    "hash" text not null,
    "created_at" bigint
);


alter sequence "drizzle"."__drizzle_migrations_id_seq" owned by "drizzle"."__drizzle_migrations"."id";

CREATE UNIQUE INDEX __drizzle_migrations_pkey ON drizzle.__drizzle_migrations USING btree (id);

alter table "drizzle"."__drizzle_migrations" add constraint "__drizzle_migrations_pkey" PRIMARY KEY using index "__drizzle_migrations_pkey";


create schema if not exists "next_auth";

create table "next_auth"."accounts" (
    "id" uuid not null default uuid_generate_v4(),
    "type" text not null,
    "provider" text not null,
    "providerAccountId" text not null,
    "refresh_token" text,
    "access_token" text,
    "expires_at" bigint,
    "token_type" text,
    "scope" text,
    "id_token" text,
    "session_state" text,
    "oauth_token_secret" text,
    "oauth_token" text,
    "userId" uuid
);


create table "next_auth"."sessions" (
    "id" uuid not null default uuid_generate_v4(),
    "expires" timestamp with time zone not null,
    "sessionToken" text not null,
    "userId" uuid
);


create table "next_auth"."users" (
    "id" uuid not null default uuid_generate_v4(),
    "name" text,
    "email" text,
    "emailVerified" timestamp with time zone,
    "image" text
);


create table "next_auth"."verification_tokens" (
    "identifier" text,
    "token" text not null,
    "expires" timestamp with time zone not null
);


CREATE UNIQUE INDEX accounts_pkey ON next_auth.accounts USING btree (id);

CREATE UNIQUE INDEX email_unique ON next_auth.users USING btree (email);

CREATE UNIQUE INDEX provider_unique ON next_auth.accounts USING btree (provider, "providerAccountId");

CREATE UNIQUE INDEX sessions_pkey ON next_auth.sessions USING btree (id);

CREATE UNIQUE INDEX sessiontoken_unique ON next_auth.sessions USING btree ("sessionToken");

CREATE UNIQUE INDEX token_identifier_unique ON next_auth.verification_tokens USING btree (token, identifier);

CREATE UNIQUE INDEX users_pkey ON next_auth.users USING btree (id);

CREATE UNIQUE INDEX verification_tokens_pkey ON next_auth.verification_tokens USING btree (token);

alter table "next_auth"."accounts" add constraint "accounts_pkey" PRIMARY KEY using index "accounts_pkey";

alter table "next_auth"."sessions" add constraint "sessions_pkey" PRIMARY KEY using index "sessions_pkey";

alter table "next_auth"."users" add constraint "users_pkey" PRIMARY KEY using index "users_pkey";

alter table "next_auth"."verification_tokens" add constraint "verification_tokens_pkey" PRIMARY KEY using index "verification_tokens_pkey";

alter table "next_auth"."accounts" add constraint "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES next_auth.users(id) ON DELETE CASCADE not valid;

alter table "next_auth"."accounts" validate constraint "accounts_userId_fkey";

alter table "next_auth"."accounts" add constraint "provider_unique" UNIQUE using index "provider_unique";

alter table "next_auth"."sessions" add constraint "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES next_auth.users(id) ON DELETE CASCADE not valid;

alter table "next_auth"."sessions" validate constraint "sessions_userId_fkey";

alter table "next_auth"."sessions" add constraint "sessiontoken_unique" UNIQUE using index "sessiontoken_unique";

alter table "next_auth"."users" add constraint "email_unique" UNIQUE using index "email_unique";

alter table "next_auth"."verification_tokens" add constraint "token_identifier_unique" UNIQUE using index "token_identifier_unique";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION next_auth.uid()
 RETURNS uuid
 LANGUAGE sql
 STABLE
AS $function$
  select
  	coalesce(
		nullif(current_setting('request.jwt.claim.sub', true), ''),
		(nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub')
	)::uuid
$function$
;

grant delete on table "next_auth"."accounts" to "service_role";

grant insert on table "next_auth"."accounts" to "service_role";

grant references on table "next_auth"."accounts" to "service_role";

grant select on table "next_auth"."accounts" to "service_role";

grant trigger on table "next_auth"."accounts" to "service_role";

grant truncate on table "next_auth"."accounts" to "service_role";

grant update on table "next_auth"."accounts" to "service_role";

grant delete on table "next_auth"."sessions" to "service_role";

grant insert on table "next_auth"."sessions" to "service_role";

grant references on table "next_auth"."sessions" to "service_role";

grant select on table "next_auth"."sessions" to "service_role";

grant trigger on table "next_auth"."sessions" to "service_role";

grant truncate on table "next_auth"."sessions" to "service_role";

grant update on table "next_auth"."sessions" to "service_role";

grant delete on table "next_auth"."users" to "service_role";

grant insert on table "next_auth"."users" to "service_role";

grant references on table "next_auth"."users" to "service_role";

grant select on table "next_auth"."users" to "service_role";

grant trigger on table "next_auth"."users" to "service_role";

grant truncate on table "next_auth"."users" to "service_role";

grant update on table "next_auth"."users" to "service_role";

grant delete on table "next_auth"."verification_tokens" to "service_role";

grant insert on table "next_auth"."verification_tokens" to "service_role";

grant references on table "next_auth"."verification_tokens" to "service_role";

grant select on table "next_auth"."verification_tokens" to "service_role";

grant trigger on table "next_auth"."verification_tokens" to "service_role";

grant truncate on table "next_auth"."verification_tokens" to "service_role";

grant update on table "next_auth"."verification_tokens" to "service_role";


create sequence "public"."reviews_id_seq";

alter table "public"."profile" drop constraint "profile_pkey";

alter table "public"."review" drop constraint "review_pkey";

drop index if exists "public"."profile_pkey";

drop index if exists "public"."review_pkey";

alter table "public"."review" alter column "id" set default nextval('reviews_id_seq'::regclass);

alter sequence "public"."reviews_id_seq" owned by "public"."review"."id";

drop sequence if exists "public"."review_id_seq";

CREATE UNIQUE INDEX profiles_pkey ON public.profile USING btree (id);

CREATE UNIQUE INDEX reviews_pkey ON public.review USING btree (id);

alter table "public"."profile" add constraint "profiles_pkey" PRIMARY KEY using index "profiles_pkey";

alter table "public"."review" add constraint "reviews_pkey" PRIMARY KEY using index "reviews_pkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$begin
  insert into public.profile (id, full_name, avatar_url, email, registered_with)
  values (
    new.id, 
    new.raw_user_meta_data->>'full_name', 
    new.raw_user_meta_data->>'avatar_url',
    new.raw_user_meta_data->>'email',
    'oauth' 
    );
  return new;
end;$function$
;


create schema if not exists "reviews";

create table "reviews"."reviews" (
    "id" bigint generated always as identity not null,
    "stars" integer,
    "content" text,
    "user_id" uuid,
    "user_provider" text
);


alter table "reviews"."reviews" enable row level security;

CREATE UNIQUE INDEX reviews_pkey ON reviews.reviews USING btree (id);

alter table "reviews"."reviews" add constraint "reviews_pkey" PRIMARY KEY using index "reviews_pkey";

alter table "reviews"."reviews" add constraint "reviews_stars_check" CHECK (((stars >= 0) AND (stars <= 5))) not valid;

alter table "reviews"."reviews" validate constraint "reviews_stars_check";

alter table "reviews"."reviews" add constraint "reviews_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) not valid;

alter table "reviews"."reviews" validate constraint "reviews_user_id_fkey";


