export type ReactButtonProps = {
    text: string;
    name: string;
    type: string;
};
const ReactButton = ({text, name, type}: ReactButtonProps) => {
    return (<input type={type} className="button" name={name} value={text}></input>);
}

export default ReactButton;