import {App} from '@/components/App/App';
import {IApi} from '@/interfaces/IApi';
import {BlocksArray, IDocument} from '@/interfaces/IDocument';
import {Injector} from '@/lib/Injector';
import * as React from 'react';

export type IDeps = IApi;

export interface IEditorOwnProps {
    document?: IDocument;
    blocks?: BlocksArray;

    deps?: IDeps;
}

export interface IEditorState {
    blocks?: BlocksArray;
}

export type IEditorProps = IApi & IEditorOwnProps;

export class Editor extends React.Component<IEditorProps, IEditorState> {
    constructor (props: IEditorProps) {
        super(props);

        this.state = {
            blocks: props.blocks,
        };

        Injector.setAll(this.props.deps);
    }

    public render () {
        return <App/>;
    }
}
