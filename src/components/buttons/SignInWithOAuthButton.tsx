"use client";
import { Button } from "@/components/ui/button";
import { signInWithOAuth } from "@/lib/auth-actions";
import React from "react";

interface SignInWithOAuthProps {
  provider: "google" | "github" | "discord";
  icon?: React.ReactNode;
}

const SignInWithOAuthButton = ({
  provider = "google",
  icon,
}: SignInWithOAuthProps) => {
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      onClick={() => {
        signInWithOAuth(provider);
      }}
    >
      {icon}
      <p>
        Login with <span className="capitalize">{provider}</span>
      </p>
    </Button>
  );
};

export default SignInWithOAuthButton;
