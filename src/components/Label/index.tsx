import { LabelContainer } from './style';

const Label = ({ title, children, marginBottom }: { title: string, children: JSX.Element, marginBottom?: string }): JSX.Element => {
    return (
        <LabelContainer marginBottom={marginBottom}>
            {title}
            {children}
        </LabelContainer>
    );
}

export default Label;
