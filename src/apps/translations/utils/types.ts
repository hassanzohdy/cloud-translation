export type Namespace = {
  name: string;
  title: string;
  keywords: string[];
  categories: Category[];
};

export type Category = {
  name: string;
  title: string;
  namespace: string;
  keywords: string[];
  translations: {
    [keyword: string]: {
      [localeCode: string]: string;
    };
  };
  translationsCount: {
    localeCode: string;
    count: number;
  }[];
};

export type Keyword = {
  name: string;
  namespace: string;
  category: string;
  keywords: string;
  translations: {
    [localeCode: string]: string;
  };
};
