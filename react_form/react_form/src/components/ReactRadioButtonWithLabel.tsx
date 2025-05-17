import ReactLabel from "./ReactLabel";
import ReactRadioButton from "./ReactRadioButton.tsx";

export type RadioButtonWithLabelProps = {
    name: string;
    text: string;
}
const ReactRadioButtonWithLabel = ({name, text}: RadioButtonWithLabelProps) => {
    return (
        <div className="radiobutton_with_label-container">
            <ReactRadioButton name={name}/>
            <ReactLabel text={text} forElement={name}/>
        </div>
    )
}
export default ReactRadioButtonWithLabel;