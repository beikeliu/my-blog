export type DataModel<T> = {
  code: number;
  data: T;
  msg: string;
};

export type PostListModel = {
  id: number;
  content: string;
}[];
