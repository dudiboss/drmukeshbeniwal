import Herosection from "@/components/Herosection";
import Focus from "@/components/Focus";
import UserInteraction from "@/components/ui/userinteraction";
import SectionCards from "@/components/ui/card";
// import { StickyScrollRevealDemo } from "@/components/Stickyscroll";
import * as React from "react";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
    <main className="min-h-screen antialiased">
    <Herosection/>
    <Focus/>
    <SectionCards/>
    {/* <StickyScrollRevealDemo /> */}
    {/* <UserInteraction /> */}
    </main>
    </NextUIProvider>
  );
}
