"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();
  return (
    <main className="grid min-h-screen place-items-center bg-primary px-5">
      <form
        className="w-full max-w-md bg-ivory p-8"
        onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          if (String(fd.get("password")).length < 6) {
            setError("Use at least 6 characters.");
            return;
          }
          router.push("/admin");
        }}
      >
        <p className="text-xs font-bold uppercase tracking-[.22em] text-gold-strong">
          Safar e Harmain
        </p>
        <h1 className="mt-3 font-display text-4xl text-primary">Admin workspace</h1>
        <div className="mt-8 grid gap-4">
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="h-12 border border-border px-3"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="h-12 border border-border px-3"
          />
          <button className="h-12 bg-primary text-sm font-bold text-primary-foreground">
            Continue
          </button>
          {error && <p className="text-sm text-red-700">{error}</p>}
        </div>
      </form>
    </main>
  );
}
