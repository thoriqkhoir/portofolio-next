"use client";

import { PropsWithChildren } from "react";
import SmoothScroll from "@/components/animations/SmoothScroll";
import CustomCursor from "@/components/animations/CustomCursor";
import Navbar from "@/components/layouts/Navbar";

export default function PortfolioLayout({ children }: PropsWithChildren) {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
    </SmoothScroll>
  );
}
