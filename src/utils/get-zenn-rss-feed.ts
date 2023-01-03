import Parser from "rss-parser";
import dayjs from "dayjs";

const zennUrl = `https://zenn.dev/${import.meta.env.PUBLIC_ZENN_USERNAME}`;

export type ZennFeed = {
  title: string;
  digest: string;
  date: string;
  slug: string;
};

type GetZennRssFeed = () => Promise<{
  pagePosts: ZennFeed[];
  totalCount: number;
}>;

export const getZennRssFeed: GetZennRssFeed = async () => {
  const feed = await new Parser().parseURL(`${zennUrl}/feed?all=1`);
  return {
    pagePosts: feed.items.map((item) => ({
      title: item.title ?? "",
      digest: item.content ?? "",
      date: item.pubDate ? dayjs(item.pubDate).format("YYYY/MM/DD") : "",
      slug: item.link ?? zennUrl,
    })),
    totalCount: feed.items.length,
  };
};
