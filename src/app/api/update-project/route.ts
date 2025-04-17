import { NextRequest } from "next/server";
import { db } from "@/db";
import { project } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getCurrentUserProfile } from "@/db/profile/getCurrentUserProfile";

export async function POST(req: NextRequest) {
  const user = await getCurrentUserProfile();
  if (user.userGroup !== "admin") return [];
  const body = await req.json();
  const { id, type, phase, price } = body;

  if (!id || !type || !phase || !price) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }

  await db
    .update(project)
    .set({ type, phase, price })
    .where(eq(project.id, id));

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
