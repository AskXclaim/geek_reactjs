export type LabelProps = {
    text: string;
    forElement: string;
};
const Label = ({text, forElement}: LabelProps) => {
    return (
        <label className="label" htmlFor={forElement}>{text}</label>
    );
}
export default Label;