export type ReactCheckBoxProps = {
    name: string;
    
}
const ReactCheckBox = ({name}:ReactCheckBoxProps) => {
    return (
      <input id={name} name={name} type="checkbox" />
    );
};
export default ReactCheckBox;