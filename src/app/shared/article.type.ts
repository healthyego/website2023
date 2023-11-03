export type Article = {
  id: string;
  title: string;
  coverUrl: string;
  keywords: Array<string>;
  artists: Array<string>;
  description: string;
  references: Array<string>;
  dates: {
    startDate: string;
    endDate: string | null;
  };
  assets: {
    pictureUrls: Array<string>;
    videoUrls: Array<string>;
  }
}
