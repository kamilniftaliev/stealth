"use client";

import { PropsWithChildren } from "react";

export default function Template({ children }: PropsWithChildren) {
  return (
    <main className="flex items-center justify-center grow h-content sm:h-screen">
      {children}
    </main>
  );
}
