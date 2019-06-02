import {EInjections} from '@/interfaces/EInjections';
import {ApiCreateBlock, ApiDeleteBlock, ApiPutBlock} from '@/interfaces/IApi';
import {Injector} from '@/lib/Injector';

export const createBlock = (): ApiCreateBlock => (Injector.get(EInjections.API_CREATE_BLOCK));
export const deleteBlock = (): ApiDeleteBlock => (Injector.get(EInjections.API_DELETE_BLOCK));
export const putBlock = (): ApiPutBlock => (Injector.get(EInjections.API_PUT_BLOCK));
