import type {ChangeEvent} from "react";

export type  ReactInputProps = {
    inputType: string,
    inputName: string,
    inputPlaceholder?: string | null,
    value: string,
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
};
const ReactInput = ({inputType, inputName, inputPlaceholder, value, onInputChange}: ReactInputProps) => {
    if (inputPlaceholder !== null && inputPlaceholder !== undefined) {
        return (<input id={inputName} name={inputName} type={inputType} className="text-input"
                       placeholder={inputPlaceholder} value={value}
                       onChange={(e) => onInputChange(e)}
        />);
    }
    return (<input id={inputName} name={inputName} type={inputType}
                   onChange={(e) => onInputChange(e)}
                   className="text-input upload" value={value}/>);
}

export default ReactInput;