"use client"

import React from "react";
import {
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

function Dashboard() {
  const router = useRouter();
  const options = [
    {
      label: "Social Preview",
      icon: Code,
      color: "text-green-700",
      bgColor: "bg-green-700/10",
      href: "/preview",
    },
    {
      label: "Meta Tags",
      icon: MessageSquare,
      href: "/meta-tags",
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      label: "Meta View",
      icon: ImageIcon,
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
      href: "/meta-view",
    }
  ];
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of Social Media Presence
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-md text-center">
          View and compare how you look in social media - because that is the key to success for your businees in the internet
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {options.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
