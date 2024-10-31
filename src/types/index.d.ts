// images.d.ts
declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.jpeg" {
  const value: any;
  export default value;
}

declare module "*.gif" {
  const value: any;
  export default value;
}

declare interface NewsTypes {
  _id: string;
  author: string;
  clean_url: string;
  country: string;
  language: string;
  link: string;
  published_date: string;
  rank: string;
  rights: string;
  summary: string;
  P: string;
  tech: string;
}
