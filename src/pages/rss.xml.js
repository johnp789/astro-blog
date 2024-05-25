import rss, { pagesGlobToRssItems } from "@astrojs/rss"

export async function GET(context) {
  return rss({
    title: "John Pitney | Blog",
    description: "John Pitney Blog",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  })
}
