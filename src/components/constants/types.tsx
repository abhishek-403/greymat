export type TabType = {
  name: string;
  link: string;
};
export type CardProps = {
  img: string;
  title: string;
  brief: string;
  link?: string;
  btn_text?:string
};
export type ServicePageProps = {
  img:string;
  heroHead: string;
  heroContent: string;
  cardsHead: string;
  cardsSubHead: string;
  cards: CardProps[];
};
