"use client";

import { PropsWithChildren } from "react";

export default function Template({ children }: PropsWithChildren) {
  return <div className="m-auto">{children}</div>;
}
