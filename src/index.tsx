import {App} from '@/components/App/App';
import {IApi} from '@/interfaces/IApi';
import {BlocksArray, IDocument} from '@/interfaces/IDocument';
import {Injector} from '@/lib/Injector';
import * as React from 'react';

type IDeps = IApi;

interface IEditorOwnProps {
    document?: IDocument;
    blocks?: BlocksArray;

    deps?: IDeps;
}

interface IEditorState {
    blocks?: BlocksArray;
}

type IEditorProps = IEditorOwnProps;

export default class Editor extends React.Component<IEditorProps, IEditorState> {
    constructor (props: IEditorProps) {
        super(props);

        Injector.setAll(this.props.deps);
    }

    public render () {
        return <App/>;
    }
}
