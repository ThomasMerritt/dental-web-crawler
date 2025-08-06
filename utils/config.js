import dotenv from 'dotenv';
dotenv.config();

export const config = {
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/dental_crawler',
  usePuppeteer: process.env.USE_PUPPETEER === 'true',
  crawlDelayMs: Number(process.env.CRAWL_DELAY_MS) || 2000,
  outputCsvPath: process.env.OUTPUT_CSV || 'output/dental_data.csv',
}; 