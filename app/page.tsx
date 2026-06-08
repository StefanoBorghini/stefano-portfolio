"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "selectedworks") {
      router.push("/preview");
    } else {
      alert("Wrong password");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f1ea] px-6">
      <div className="w-full max-w-md text-center">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Private Preview
        </p>

        <h1 className="text-5xl font-semibold tracking-tight text-black">
          B.F.M. S.r.l
        </h1>

        <p className="mt-6 text-neutral-600">
          Selected works and digital experiences
          <br />
          prepared by Stefano Borghini.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className="mt-10">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full cursor-text rounded-full border border-neutral-300 bg-white px-6 py-4 text-center text-black placeholder:text-neutral-400 outline-none transition focus:border-black"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full cursor-pointer rounded-full bg-black px-6 py-4 text-white transition hover:opacity-80"
          >
            Enter Preview
          </button>
        </form>

      </div>
    </main>
  );
}