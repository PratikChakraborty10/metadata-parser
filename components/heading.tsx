import { LucideIcon, Link } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description: string;
  currentUrl: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  currentUrl,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <>
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
          <Icon className={cn("w-16 h-16", iconColor)} />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="w-100 bg-[#8fd6ff] flex items-center rounded-full px-3 py-1 gap-2">
            <Link size={14}/>
            <a href={currentUrl} className="text-sm text-muted-foreground">{currentUrl}</a>
          </div>
        </div>
      </div>
    </>
  );
};
