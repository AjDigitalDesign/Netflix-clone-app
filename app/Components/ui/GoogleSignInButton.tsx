"use client";
import { Button } from "@/components/ui/button";
import Image, { ImageLoader } from "next/image";
import GoogleIcon from "../../../public/google.svg";
import { signIn } from "next-auth/react";

function GoogleSignInButton() {
  return (
    <Button variant="outline" size="icon" onClick={() => signIn("google")}>
      <Image src={GoogleIcon} alt="Google" className="w-h4 h-4" />
    </Button>
  );
}

export default GoogleSignInButton;
