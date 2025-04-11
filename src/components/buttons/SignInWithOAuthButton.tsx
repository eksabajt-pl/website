"use client";
import {Button} from "@/components/ui/button";
import {signInWithOAuth} from "@/lib/auth-actions";
import React from "react";
import {useTranslation} from "react-i18next";

interface SignInWithOAuthProps {
	provider: "google" | "github" | "discord";
	icon?: React.ReactNode;
}

const SignInWithOAuthButton = ({
	provider = "google",
	icon,
}: SignInWithOAuthProps) => {
	const {t} = useTranslation("auth");
	return (
		<Button
			type="button"
			variant="outline"
			className="w-full"
			onClick={() => {
				signInWithOAuth(provider);
			}}>
			{icon}
			<p>{t(`login.providers.${provider}`)}</p>
		</Button>
	);
};

export default SignInWithOAuthButton;
