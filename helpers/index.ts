import axios from "axios"
import cheerio from "cheerio"

export const fetchMetaAndLinkTags = async (url: string) => {
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
      return {
        metaTags,
        linkTags
      }
    } catch (error) {
      console.error('Error fetching meta and link tags:', error);
      // Handle errors appropriately (e.g., display an error message to the user)
    }
  };