import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GithubButton from "@/app/Components/ui/GithubButton";
import GoogleSignInButton from "@/app/Components/ui/GoogleSignInButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/util/auth";
import { redirect } from "next/navigation";

async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/home");
  }
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form>
        <h1 className="text-3xl font-semibold text-white">Login</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400"
          />
          <Button variant={"destructive"} className="bg-[#e50914] w-full">
            Login
          </Button>
        </div>
      </form>

      <div className="text-gray-500 text-sm mt-2">
        <p>
          New to Netflix?{"  "}
          <Link href="/sign-up" className="text-white hover:underline">
            Sign up now.
          </Link>
        </p>
      </div>

      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GithubButton />
        <GoogleSignInButton />
      </div>
    </div>
  );
}

export default Login;
