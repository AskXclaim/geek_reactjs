export type ReactRadioButtonProps = {
    name: string;

}
const ReactRadioButton = ({name}: ReactRadioButtonProps) => {
    return (
        <input name={name} type="radio"/>
    );
};
export default ReactRadioButton;