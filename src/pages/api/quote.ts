import { NextApiRequest, NextApiResponse } from 'next';

interface QuoteResponse {
  quote: string;
}

interface QuoteData {
  content: string;
}

const ONE_DAY = 24 * 60 * 60 * 1000;

let cachedQuote: QuoteData | null = null;
let lastFetchTime: number = 0;

export default async function handler(_req: NextApiRequest, res: NextApiResponse<QuoteResponse>) {
  const currentTime = Date.now();
  if (cachedQuote && currentTime - lastFetchTime <= ONE_DAY) {
    res.status(200).json({ quote: cachedQuote.content });
    return;
  }

  const response = await fetch("https://api.quotable.io/random?maxLength=60");
  const data: QuoteData = await response.json();
  cachedQuote = data;
  lastFetchTime = currentTime;
  res.status(200).json({ quote: data.content });
}
