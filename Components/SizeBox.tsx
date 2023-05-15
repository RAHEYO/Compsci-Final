import { FC } from 'react';

type SizeBoxProps = {
    className: string
}

const SizeBox: FC<SizeBoxProps> = (props): JSX.Element => {
    return (
    <div className={props.className} />
    );
};

export default SizeBox;