import Link from "next/link";
import { Button } from "./ui/button";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <h1 className="text-3xl font-bold ">daily.tech</h1>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <SignedOut>
              <Button>
                <SignInButton />
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
