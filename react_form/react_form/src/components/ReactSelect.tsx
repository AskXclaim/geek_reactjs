import ReactSelectOption from "./ReactSelectOption.tsx";
import type {TextValuePair} from "../types/TextValuePair.ts";

export type ReactSelectProps = {
    name: string,
    id?: string,
    options: Array<TextValuePair>
}
const ReactSelect = ({name, options, id}: ReactSelectProps) => {
    return (
        <select name={name} id={id} className="select">
            {options.map(option => (
                ReactSelectOption({text: option.text, value: option.value})
                ))}
        </select>
    );
}

export default ReactSelect;