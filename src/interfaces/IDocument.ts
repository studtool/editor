export interface IDocument {
    id: string;
    title: string;
}

export type BlocksArray = Array<IBlock<ITextData & null>>;

export type TBlock = IBlock<ITextData & IEmptyData>;

export interface IBlock<T> {
    id: string;
    type: number;
    data?: T;
}

export interface ITextData {
    text: string;
}

export interface IEmptyData {
    text: '/' | null;
}

export enum EBlockTypes {
    EMPTY = 1,
    TEXT,
}
