import ReactLabel from "./ReactLabel";
import ReactCheckBox from "./ReactCheckBox.tsx";

export type CheckBoxWithLabelProps = {
    name: string;
    text: string;
}
const ReactCheckBoxWithLabel = ({name, text}: CheckBoxWithLabelProps) => {
    return (
        <div className="checkbox_with_label-container">
            <ReactCheckBox name={name}/>
            <ReactLabel text={text} forElement={name}/>
        </div>
    )
}
export default ReactCheckBoxWithLabel;