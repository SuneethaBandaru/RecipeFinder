"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useUserContext } from "@/contexts/userContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Categories" },
  { href: "/profile", label: "Profile" },
];

const Navigation = () => {
  const { user, logOut } = useUserContext();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-herb text-paper sticky top-0 z-10 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <div className="hidden sm:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-herb-dark"
                    : "hover:bg-herb-dark/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="sm:hidden flex items-center justify-between w-full">
            {isOpen ? (
              <>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-herb-dark/70"
                >
                  Home
                </Link>

                <button
                  type="button"
                  className="px-3 py-2 rounded-md text-2xl leading-none font-medium hover:bg-herb-dark/70"
                  aria-label="Close navigation menu"
                  onClick={() => setIsOpen(false)}
                >
                  ×
                </button>
              </>
            ) : (
              <button
                type="button"
                className="px-3 py-2 rounded-md hover:bg-herb-dark/70 ml-auto"
                aria-label="Open navigation menu"
                onClick={() => setIsOpen(true)}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-3 text-sm">
            {user && <span>Hi, {user.username}</span>}
            <button
              type="button"
              onClick={logOut}
              className="border border-paper/50 rounded-md px-3 py-1.5 hover:bg-herb-dark/70 transition-colors"
            >
              Log out
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden flex flex-col gap-1 pb-4">
            {links
              .filter((link) => link.href !== "/")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === link.href
                      ? "bg-herb-dark"
                      : "hover:bg-herb-dark/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

            <div className="flex items-center justify-between text-sm border-t border-paper/20 mt-2 -mx-4 sm:-mx-6 px-4 sm:px-6 pt-2">
              {user && <span>Hi, {user.username}</span>}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  logOut();
                }}
                className="border border-paper/50 rounded-md px-3 py-1.5"
              >
                Log out
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
