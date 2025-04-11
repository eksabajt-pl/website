"use server";
import {Card} from "@/components/ui/card";
import {User} from "@supabase/supabase-js";

interface UserCardProps {
	user: User;
	dictionary?: {
		loggedInAs: string;
		loggedWith: string;
	};
}
export default async function UserCard({user, dictionary}: UserCardProps) {
	const {avatar_url, full_name, email} = user.user_metadata;
	const {provider} = user.app_metadata;

	// Domyślne wartości dictionary dla serwera
	const translations = dictionary || {
		loggedInAs: "You're logged in as",
		loggedWith: "Logged with",
	};
	return (
		<div className="flex-1 gap-2 flex flex-col ">
			<Card className="text-wrap overflow-hidden p-4 flex flex-row justify-center flex-wrap">
				{/*eslint-disable-next-line @next/next/no-img-element*/}
				<img
					src={avatar_url}
					alt={full_name + "'s profile picture"}
					className="h-20 w-20 rounded-full"
				/>
				<div className="flex flex-col gap-2 justify-around">
					{" "}
					<p>{translations.loggedInAs}</p>
					<p className="text-lg font-bold">{full_name}</p> <p>{email}</p>
					<p>
						{translations.loggedWith} {provider}
					</p>
				</div>
			</Card>
		</div>
	);
}
