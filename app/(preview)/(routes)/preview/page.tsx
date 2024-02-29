"use client";
import { Heading } from "@/components/heading";
import { Separator } from "@/components/ui/separator";
import { ImageIcon, Download, Rss } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import cheerio from 'cheerio';
import { useSearchParams } from "next/navigation";

const Preview = () => {
  const searchParams = useSearchParams();
  const search: any = searchParams.get("query");

  const [headTags, setHeadTags] = useState<any>(null)
  const fetchMetaTags = async (url: string) => {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const metaTags: { [key: string]: string } = {};

      $('meta').each((i, element) => {
        const name = $(element).attr('name') || $(element).attr('property');
        if (name) {
          metaTags[name] = $(element).attr('content') || '';
        }
      });

      console.log(metaTags)

      setHeadTags(metaTags);
    } catch (error) {
      console.error('Error fetching meta tags:', error);
      // Handle errors appropriately (e.g., display an error message to the user)
    }
  };

  useEffect(() => {
    fetchMetaTags(search)
  }, [])
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
      <p>Your meta tags preview will appear here</p>
    </div>
  );
};

export default Preview;
