import * as React from 'react';

export interface IBlockProps {
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
    placeholder?: string;
    className?: string;
    children?: React.ReactNodeArray | React.ReactNode;

}

export const Block: React.FunctionComponent<IBlockProps> = (props: IBlockProps): React.ReactElement => {
    const {
        children,
        ...other
    } = props;

    return (
        <div
            contentEditable={true}
            spellCheck={true}
            {...other}
        >
            {children}
        </div>
    );
};
