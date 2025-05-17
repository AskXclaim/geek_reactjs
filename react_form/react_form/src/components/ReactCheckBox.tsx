export type ReactCheckBoxProps = {
    name: string;
    
}
const ReactCheckBox = ({name}:ReactCheckBoxProps) => {
    return (
      <input name={name} type="checkbox" />
    );
};
export default ReactCheckBox;