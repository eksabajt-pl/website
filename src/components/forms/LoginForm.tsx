import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/lib/auth-actions";
import SignInWithOAuthButton from "../buttons/SignInWithOAuthButton";
import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa";

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Choose your OAuth provider to login into your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="">
          <div className="grid gap-4">
            {/*<div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" name="password" type="password" required />
            </div>
            <Button type="submit" formAction={login} className="w-full">
              Login
            </Button>*/}
            <SignInWithOAuthButton provider="google" icon={<FaGoogle />} />
            <SignInWithOAuthButton provider="github" icon={<FaGithub />} />
            <SignInWithOAuthButton provider="discord" icon={<FaDiscord />} />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
