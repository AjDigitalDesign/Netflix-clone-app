import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImage from "../../public/login_background.jpg";
import Logo from "../../public/netflix_logo.svg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroundImage}
        alt="nextflix Background Image"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        fill
        priority
      />
      <Image
        src={Logo}
        alt="Netflix clone logo"
        className="absolute left-4 top-6 object-contain md:left-10 md:top-6"
        width={120}
        height={120}
        priority
      />
      {children}
    </div>
  );
}
