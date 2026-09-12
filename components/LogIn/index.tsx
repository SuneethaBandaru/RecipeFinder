"use client";

import { ChangeEvent, SubmitEvent, useState } from "react";
import { useUserContext } from "@/contexts/userContext";

const inputClasses =
  "block w-full rounded-md border border-line bg-paper px-3 py-2 text-ink placeholder:text-ink-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-brick";

const LogIn = () => {
  const { logIn } = useUserContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogIn = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const success = logIn(username, password);
    if (!success) {
      setError("That username or password doesn’t match. Please try again.");
      return;
    }
    setError("");
  };

  return (
    <div className="bg-card border border-line rounded-2xl p-6 sm:p-8 max-w-sm w-full mx-auto">
      <h2 className="font-display text-2xl mb-1">Welcome back</h2>
      <p className="text-ink-soft text-sm mb-6">
        Log in to save your favorite recipes and make them yours❤️
      </p>

      <form onSubmit={handleLogIn} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="username">
            Username
          </label>
          <input
            className={inputClasses}
            id="username"
            name="username"
            placeholder="Enter username"
            autoComplete="username"
            onChange={handleUsername}
            value={username}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            className={inputClasses}
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            autoComplete="current-password"
            onChange={handlePassword}
            value={password}
          />
        </div>

        {error && (
          <p role="alert" className="text-brick text-sm">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="bg-brick hover:bg-brick-dark transition-colors text-paper font-medium rounded-md py-2.5"
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default LogIn;
