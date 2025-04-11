"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import SignInWithOAuthButton from "../buttons/SignInWithOAuthButton";
import {FaDiscord, FaGithub, FaGoogle} from "react-icons/fa";
import {useTranslation} from "react-i18next";

export default function LoginForm() {
	const {t} = useTranslation("auth");
	return (
		<Card className="mx-auto max-w-sm">
			<CardHeader>
				<CardTitle className="text-2xl">{t("login.title")}</CardTitle>
				<CardDescription>{t("login.description")}</CardDescription>
			</CardHeader>
			<CardContent>
				<form action="">
					<div className="grid gap-4">
						<SignInWithOAuthButton provider="google" icon={<FaGoogle />} />
						<SignInWithOAuthButton provider="github" icon={<FaGithub />} />
						<SignInWithOAuthButton provider="discord" icon={<FaDiscord />} />
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
