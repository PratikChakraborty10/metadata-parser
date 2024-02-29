// pages/api/fetchMetaTags.ts
import axios from 'axios';
import cheerio from 'cheerio';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query as { url: string };

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

    res.status(200).json(metaTags);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}
