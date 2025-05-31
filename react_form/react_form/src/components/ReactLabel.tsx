export type ReactLabelProps = {
    text: string;
    forElement: string;
};
const ReactLabel = ({text, forElement}: ReactLabelProps) => {

    if (forElement) {
        return (<label className="label" htmlFor={forElement}>{text}</label>);
    }
    return (<label className="label">{text}</label>);
}
export default ReactLabel;