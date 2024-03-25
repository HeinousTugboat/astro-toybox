import rss, { pagesGlobToRssItems, type RSSFeedItem } from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site ?? 'some-site',
    items: await pagesGlobToRssItems(import.meta.glob<RSSFeedItem>('./**/*.md')) as RSSFeedItem[],
    customData: `<language>en-us</language>`,
  });
}
