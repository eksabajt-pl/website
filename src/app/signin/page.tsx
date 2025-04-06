import { signIn } from "@/auth";

export default function SignInPage() {
  return (
    <div>
      <h5>Login to dashboard</h5>
      <form
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/dashboard" });
        }}
      >
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
