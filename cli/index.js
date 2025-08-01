import { Command } from 'commander';
// import { runCrawl } from './crawler.js';
// import { runReport } from './report.js';

const program = new Command();

program 
    .name('dental-crawler')
    .description('CLI to crawl and report dental health equity data')
    .version('1.0.0')

// program
//     .command('crawl')
//     .option('--source <source>', 'Target source: zocdoc, healthgrades, npidb')
//     .option('--limit <limit>', 'Limit the number of clinics to crawl')
//     .option('--output-csv <file>', 'Path to output CSV file')
//     .action(runCrawl);

// program
//     .command('report')
//     .description('Generate a report from the stored data')
//     .action(runReport);

program.parse(process.argv);