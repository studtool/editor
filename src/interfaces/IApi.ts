import {IBlock} from '@/interfaces/IDocument';

export interface IApi {
    createBlock: ApiCreateBlock;
    putBlock: ApiPutBlock;
    deleteBlock: ApiDeleteBlock;
}

export type ApiCreateBlock = <T>(block: IBlock<T>) => Promise<Response>;
export type ApiPutBlock = <T>(block: IBlock<T>) => Promise<Response>;
export type ApiDeleteBlock = <T>(id: string) => Promise<Response>;
