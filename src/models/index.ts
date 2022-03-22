export type Class = {
  id: string;
  name: string;
};

export type Content = {
  id: string;
  title: string;
  body: string;
  files?: string[];
  created: string;
};

export type News = {
  id: string;
  title: string;
  body: string;
  created: string;
};
