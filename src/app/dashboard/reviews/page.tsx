import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import writeReview from "@/lib/user-actions";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <form action="">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="user_id">User id</Label>
            <Input
              name="user_id"
              value="cffac6fe-2d1a-4d31-9244-3150fe4223b7"
              type="text"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="stars">Stars</Label>
            <Input value={5} name="stars" type="number" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="content">Content</Label>
            <Input value="test" name="content" type="text" required />
          </div>
          <Button type="submit" formAction={writeReview} className="w-full">
            Review
          </Button>
        </div>
      </form>
    </div>
  );
}
