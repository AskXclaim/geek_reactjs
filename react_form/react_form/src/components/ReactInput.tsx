export type  ReactInputProps = {
    inputType: string;
    inputName: string;
    inputPlaceholder?: string | null,
};
const ReactInput = ({inputType, inputName, inputPlaceholder}: ReactInputProps) => {
    if (inputPlaceholder !== null && inputPlaceholder !== undefined) {
        return (<input name={inputName} type={inputType} className="text-input" placeholder={inputPlaceholder}/>);
    }
    return (<input name={inputName} type={inputType} className="text-input"/>);
}

export default ReactInput;