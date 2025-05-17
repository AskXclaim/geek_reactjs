import Header from "./Header.tsx";
import ReactLabel from "./ReactLabel.tsx";
import ReactInput from "./ReactInput.tsx";
import ReactButton from "./ReactButton.tsx";
import ReactCheckBoxWithLabel from "./ReactCheckBoxWithLabel.tsx";
import ReactRadioButtonWithLabel from "./ReactRadioButtonWithLabel.tsx";


const ReactForm = () => {
    return (
        <div className="container">
            <Header title="Form in React"/>
            <ReactLabel text="First Name*" forElement="firstName"/>
            <ReactInput inputType="text" inputName="firstName" inputPlaceholder="First Name"/>
            <ReactLabel text="Last Name*" forElement="lastName"/>
            <ReactInput inputType="text" inputName="lastName" inputPlaceholder="Last Name"/>
            <ReactLabel text="Email*" forElement="email"/>
            <ReactInput inputType="email" inputName="email" inputPlaceholder="your@email.com"/>
            <ReactLabel text="Context*" forElement="context"/>
            <ReactInput inputType="text" inputName="context" inputPlaceholder="context"/>
            <ReactLabel text="Gender*" forElement="gender"/>
            <div className="radio-container">
                <ReactRadioButtonWithLabel name="gender" text="Male"/>
                <ReactRadioButtonWithLabel name="gender" text="Female"/>
            </div>
            <ReactLabel text="Your best subject" forElement="yourbestsubject"/>
            <div className="checkbox-container">
                <ReactCheckBoxWithLabel name="english" text="English"/>
                <ReactCheckBoxWithLabel name="maths" text="Maths"/>
                <ReactCheckBoxWithLabel name="physics" text="Physics"/>
            </div>
            <ReactLabel text="Upload filename*" forElement="uploadFile"/>
            <ReactInput inputType="file" inputName="uploadFile" inputPlaceholder={null}/>
            <ReactLabel text="Enter Url*" forElement="url"/>
            <ReactInput inputType="url" inputName="url" inputPlaceholder={null}/>
            <div className="button-container">
                <ReactButton text="Submit" name="submit"/> <ReactButton text="Reset" name="reset"/>
            </div>
        </div>
    );
}
export default ReactForm;