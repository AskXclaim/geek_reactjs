import Header from "./Header.tsx";
import Label from "./Label.tsx";
import ReactInput from "./ReactInput.tsx";
import ReactButton from "./ReactButton.tsx";

const ReactForm = () => {
    return (
        <div className="container">
            <Header title="Form in React"/>
            <Label text="First Name*" forElement="firstName"/>
            <ReactInput inputType="text" inputName="firstName" inputPlaceholder="First Name"/>
            <Label text="Last Name*" forElement="lastName"/>
            <ReactInput inputType="text" inputName="lastName" inputPlaceholder="Last Name"/>
            <Label text="Email*" forElement="email"/>
            <ReactInput inputType="email" inputName="email" inputPlaceholder="your@email.com"/>
            <Label text="Context*" forElement="context"/>
            <ReactInput inputType="text" inputName="context" inputPlaceholder="context"/>
            <div className="button-container">
                <ReactButton text="Submit" name="submit"/> <ReactButton text="Reset" name="reset"/>
            </div>
        </div>
    );
}
export default ReactForm;