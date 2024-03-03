import axios from "axios"
import cheerio from "cheerio"

export const fetchMetaAndLinkTags = async (url: string) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://fetch-web-tags.onrender.com/v1/fetchtags?url=${url}`,
  };

  try {
    axios(config).then((res) => {
      return res;
    }).catch((ServerError: string) => {
      console.log("Something went wrong in server", ServerError)
    })
  } catch(clientError) {
    console.log("Something went wrong in client", clientError)
  }
    // try {
    //   const { data } = await axios.get(url);
    //   const $ = cheerio.load(data);
    //   const metaTags: { [key: string]: string } = {};
    //   const linkTags: { [key: string]: string } = {};
  
    //   // Extract meta tags
    //   $('meta').each((i, element) => {
    //     const name = $(element).attr('name') || $(element).attr('property');
    //     if (name) {
    //       metaTags[name] = $(element).attr('content') || '';
    //     }
    //   });
  
    //   // Extract link tags
    //   $('link').each((i, element) => {
    //     const rel = $(element).attr('rel');
    //     if (rel) {
    //       linkTags[rel] = $(element).attr('href') || '';
    //     }
    //   });
    //   return {
    //     metaTags,
    //     linkTags
    //   }
    // } catch (error) {
    //   console.error('Error fetching meta and link tags:', error);
    //   // Handle errors appropriately (e.g., display an error message to the user)
    // }
  };