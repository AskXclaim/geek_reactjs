export type ReactButtonProps = {
    text: string;
    name: string;
};
const ReactButton = ({text, name}: ReactButtonProps) => {
    return (<button className="button" name={name}>{text}</button>);
}

export default ReactButton;