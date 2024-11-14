import { CategoryDTO } from "./category";

export type NoticetDTO = {
    id: number;
    title: string;
    mainImgUrl: string
    introduction: string;
    content: string;
    price: number;
    imgUrl: string;
    categories: CategoryDTO[];
};