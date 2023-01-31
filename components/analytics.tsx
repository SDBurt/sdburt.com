"use client";

import { Analytics } from "@vercel/analytics/react";

const isProduction = process.env.NODE_ENV === "production";

export default function VercelAnalytics() {
  return <>{isProduction && <Analytics />}</>;
}
