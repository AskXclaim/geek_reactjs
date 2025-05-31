export type ReactSelectOptionProps = {
    value: string,
    text: string
};
const ReactSelectOption = ({value, text}: ReactSelectOptionProps) => {
    return (
        <option key={value} value={value}>{text}</option>
    )
}

export default ReactSelectOption;