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
  const [linkTags, setLinkTags] = useState<any>(null)
  const fetchMetaAndLinkTags = async (url: string) => {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const metaTags: { [key: string]: string } = {};
      const linkTags: { [key: string]: string } = {};
  
      // Extract meta tags
      $('meta').each((i, element) => {
        const name = $(element).attr('name') || $(element).attr('property');
        if (name) {
          metaTags[name] = $(element).attr('content') || '';
        }
      });
  
      // Extract link tags
      $('link').each((i, element) => {
        const rel = $(element).attr('rel');
        if (rel) {
          linkTags[rel] = $(element).attr('href') || '';
        }
      });
  
      // Log and set the state for both meta and link tags
      console.log('Meta Tags:', metaTags);
      console.log('Link Tags:', linkTags);
  
      setHeadTags(metaTags);
      setLinkTags(linkTags); // Assuming you have a setLinkTags function for setting link tags state
    } catch (error) {
      console.error('Error fetching meta and link tags:', error);
      // Handle errors appropriately (e.g., display an error message to the user)
    }
  };
  

  useEffect(() => {
    fetchMetaAndLinkTags(search)
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
