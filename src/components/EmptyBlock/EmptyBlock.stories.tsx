import * as React from 'react';

import {EmptyBlock} from '@/components/EmptyBlock/EmptyBlock';
import {storiesOf} from '@storybook/react';

interface IState {
    focused: boolean;
}

class Wrapper extends React.Component<{}, IState> {
    public state: IState = {
        focused: false,
    };

    public render (): React.ReactNode {
        const {focused = true} = this.state;

        return <EmptyBlock focused={focused} onFocus={this.onFocus} onBlur={this.onBlur}/>;
    }

    private onFocus = (): void => {
        this.setState({
           focused: true,
        });
    };

    private onBlur = (): void => {
        this.setState({
            focused: false,
        });
    };
}

storiesOf('Empty Block', module)
    .add('default with statefull', () => (
        <Wrapper/>
    ))
    .add('focused', () => (
        <EmptyBlock focused={true}/>
    ))
    .add('blur', () => (
        <EmptyBlock focused={false}/>
    ));
