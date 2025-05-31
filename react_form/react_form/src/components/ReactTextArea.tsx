export type ReactTextAreaProps = {
    name: string;
    maxLength?: number;
}
const ReactTextArea = ({name, maxLength = 150}: ReactTextAreaProps) => {
    return (
        <textarea id={name} name={name} maxLength={maxLength} className="textarea"></textarea>
    );
};

export default ReactTextArea;