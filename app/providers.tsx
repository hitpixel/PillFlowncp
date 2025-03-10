"use client";

import { type ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

interface ConvexClientProviderProps {
  children: ReactNode;
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: ConvexClientProviderProps): JSX.Element {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
} 