"use client";

import LogIn from ".";
import GuestPreview from "@/components/GuestPreview";
import { useUserContext } from "@/contexts/userContext";
import { ReactNode } from "react";
import Navigation from "@/components/Navigation";

const LogInWrapper = ({ children }: { children: ReactNode }) => {
  const { user } = useUserContext();

  if (!user) {
    return (
      <div className="grow flex items-center justify-center px-4 py-10 sm:py-16">
        <div className="flex flex-col sm:flex-row gap-10 items-start max-w-3xl w-full justify-center">
          <LogIn />
          <GuestPreview />
        </div>
      </div>
    );
  }

  return (
    <div className="grow flex flex-col">
      <Navigation />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {children}
      </main>
    </div>
  );
};

export default LogInWrapper;
