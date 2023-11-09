export type Article = {
  id: string;
  title: string;
  coverUrl: string;
  keywords: Array<string>;
  artists: Array<string>;
  description: string;
  references: Array<Reference>;
  dates: {
    startDate: Date;
    endDate: Date | null;
  };
  assets: {
    pictureUrls: Array<string>;
    videoUrls: Array<string>;
  }
}

export type Reference = {
  name: string;
  url: string
}
