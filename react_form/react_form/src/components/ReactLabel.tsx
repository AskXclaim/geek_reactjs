export type ReactLabelProps = {
    text: string;
    forElement: string;
};
const ReactLabel = ({text, forElement}: ReactLabelProps) => {
    return (
        <label className="label" htmlFor={forElement}>{text}</label>
    );
}
export default ReactLabel;