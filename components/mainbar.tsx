import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

function Mainabar() {
  return (
    <div className="flex py-3 px-3 bg-zinc-200 shadow">
      <div className="flex justify-between">
        <div className="flex gap-4 justify-center items-center">
          <Image alt="logo" src="/logo.png" height={30} width={30} />
          <h1 className={cn("font-bold", montserrat.className)}>Link Glimpse</h1>
        </div>
      </div>
    </div>
  );
}

export default Mainabar;
