import {Block, IBlockProps} from '@/components/Block/Block';
import classNames = require('classnames');
import * as React from 'react';
import * as styles from './EmptyBlock.css';

export interface IEmptyBlockProps {
    focused: boolean;
}

const text = 'Нажмите / чтобы добавить блок';

export class EmptyBlock extends React.Component<IEmptyBlockProps & IBlockProps> {
    public render (): React.ReactNode {
        const {focused = false, ...otherProps} = this.props;

        const focusedClass = classNames({
            [styles.focused]: focused,
        });

        console.log(focused);

        return (
            <Block className={focusedClass} placeholder={(focused ? text : void 0)} {...otherProps}/>
        );
    }
}
