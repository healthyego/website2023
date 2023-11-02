export type Article = {
  title: string;
  coverUrl: string;
  keywords: Array<string>;
  artists: Array<string>;
  description: string;
  references: Array<string>;
  dates: {
    startDate: string;
    endDate: string;
  };
  assets: {
    pictureUrls: Array<string>;
    videoUrls: Array<string>;
  }
}
