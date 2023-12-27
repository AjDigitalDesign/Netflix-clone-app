"use client";
import { Button } from "@/components/ui/button";
import Image, { ImageLoader } from "next/image";
import GoogleIcon from "../../../public/google.svg";

function GoogleSignInButton() {
  return (
    <Button variant="outline" size="icon">
      <Image src={GoogleIcon} alt="Google" className="w-h4 h-4" />
    </Button>
  );
}

export default GoogleSignInButton;
