"use client";
import { Heading } from "@/components/heading";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fetchMetaAndLinkTags } from "@/helpers/index";
import { ImageIcon, Download, Rss, Upload } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import cheerio from "cheerio";
import { useSearchParams } from "next/navigation";
import { metadata } from "@/app/layout";
import MetaTags from "../meta-tags/page";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Preview = () => {
  const searchParams = useSearchParams();
  const search: any = searchParams.get("query");

  const [headTags, setHeadTags] = useState<any>(null);
  const [linkTags, setLinkTags] = useState<any>(null);

  useEffect(() => {
    fetchMetaAndLinkTags(search)
      .then((res: any) => {
        setHeadTags(res.metaTags);
        setLinkTags(res.linkTags);
        console.log(res.metaTags)
      })
      .catch((error) => {
        console.error("Error in fetchMetaAndLinkTags:", error);
      });
  }, [search]);

  console.log(headTags);
  return (
    <div className="h-full w-full py-6 flex flex-col justify-center items-center">
      <Heading
        title="Meta Data Preview"
        description="Check the social previews of your website"
        currentUrl={search}
        icon={Rss}
        iconColor="text-[#004166]"
        bgColor="bg-[#c2e9ff]"
      />

      <Separator />
      <div className="h-full w-full  min-w-screen py-6 flex  items-center">
        <div className="w-1/3 bg-white flex flex-col items-center p-4 gap-4">
          <div
            className="min-w-[100%] h-[10rem] rounded-md border border-gray-300 flex justify-center align-center hover:border-blue-500 transform hover:scale-105 transition-all cursor-pointer opacity-75"
            style={{
              backgroundImage:
                "url(https://cloud.appwrite.io/v1/storage/buckets/65e21c67ecbe81825e94/files/65e23b76d6887f5576c9/view?project=65e21bf25f362c46250a&mode=admin)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="h-full w-full flex flex-col justify-center items-center">
              <Avatar>
                <AvatarFallback>
                  <Upload />
                </AvatarFallback>
              </Avatar>
              <p className="text-sm text-black">
                Click to upload image
              </p>
            </div>
          </div>
          <Input type="text"
          placeholder="Enter title" />
          <Textarea placeholder="Enter description ..." />
        </div>

        <div className="w-2/3 h-full flex flex-col justify-center items-center p-6 bg-white">
          {/* Vertical list of images */}
          <div className="flex gap-2">
          <p className="text-sm text-muted-foreground">{JSON.stringify(headTags)}</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
