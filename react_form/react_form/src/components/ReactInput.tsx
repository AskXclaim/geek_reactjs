export type  ReactInputProps = {
    inputType: string;
    inputName: string;
    inputPlaceholder?: string | null,
};
const ReactInput = ({inputType, inputName, inputPlaceholder}: ReactInputProps) => {
    if (inputPlaceholder !== null && inputPlaceholder !== undefined) {
        return (<input id={inputName} name={inputName} type={inputType} className="text-input" placeholder={inputPlaceholder}/>);
    }
    return (<input  id={inputName} name={inputName} type={inputType} className="text-input upload"/>);
}

export default ReactInput;