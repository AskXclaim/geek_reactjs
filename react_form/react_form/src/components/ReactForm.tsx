import Header from "./Header.tsx";
import ReactLabel from "./ReactLabel.tsx";
import ReactInput from "./ReactInput.tsx";
import ReactButton from "./ReactButton.tsx";
import ReactCheckBoxWithLabel from "./ReactCheckBoxWithLabel.tsx";
import ReactRadioButtonWithLabel from "./ReactRadioButtonWithLabel.tsx";
import ReactSelect from "./ReactSelect.tsx";
import type {TextValuePair} from "../types/TextValuePair.ts";
import ReactTextArea from "./ReactTextArea.tsx";
import type IForm from "../stateManagement/types/IForm.ts";
import {type ChangeEvent, type Dispatch, type FormEvent, type SetStateAction, useState} from "react";

const answersOptions = Array<TextValuePair>();
answersOptions.push({text: "Select an answer", value: ""});
answersOptions.push({text: "Maths", value: "Maths"});
answersOptions.push({text: "English", value: "English"});
answersOptions.push({text: "French", value: "French"});

export type ReactFormProps = {
    formValues: IForm;
    onSubmitForm: Dispatch<SetStateAction<{ formValues: IForm }>>;
    setSubmitted: Dispatch<SetStateAction<{ hasBeenSubmitted: boolean }>>
}
const ReactForm = ({formValues, onSubmitForm, setSubmitted}: ReactFormProps) => {
    const [thisFormValues, setThisFormValues] = useState(formValues);
    const onFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmitForm({formValues: {...thisFormValues}});
        setSubmitted({hasBeenSubmitted: true});
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const name = e.target.name;
        setThisFormValues({...thisFormValues, [name]: value});
    };

    return (

        <div className="container">
            <Header title="Form in React"/>
            <form onSubmit={(e) => onFormSubmit(e)}>
                <div className="input-container">
                    <ReactLabel text="First Name*" forElement="firstName"/>
                    <ReactInput inputType="text" inputName="firstName"
                                inputPlaceholder="First Name" value={thisFormValues.firstName}
                                onInputChange={onChange}/>
                </div>
                <div className="input-container">
                    <ReactLabel text="Last Name*" forElement="lastName"/>
                    <ReactInput inputType="text" inputName="lastName"
                                inputPlaceholder="Last Name" value={thisFormValues.lastName}
                                onInputChange={onChange}/>
                </div>
                <div className="input-container">
                    <ReactLabel text="Email*" forElement="email"/>
                    <ReactInput inputType="email" inputName="email"
                                inputPlaceholder="your@email.com" value={thisFormValues.email}
                                onInputChange={onChange}/>
                </div>
                <div className="input-container">
                    <ReactLabel text="Context*" forElement="context"/>
                    <ReactInput inputType="text" inputName="context"
                                inputPlaceholder="context" value={thisFormValues.context}
                                onInputChange={onChange}/>
                </div>
                <div className="input-container">
                    <ReactLabel text="Gender*" forElement=""/>
                    <div className="radio-container">
                        <ReactRadioButtonWithLabel name="gender" text="Male"/>
                        <ReactRadioButtonWithLabel name="gender" text="Female"/>
                    </div>
                </div>
                <div className="input-container">
                    <ReactLabel text="Your best subject" forElement=""/>
                    <div className="checkbox-container">
                        <ReactCheckBoxWithLabel name="english" text="English"/>
                        <ReactCheckBoxWithLabel name="maths" text="Maths"/>
                        <ReactCheckBoxWithLabel name="physics" text="Physics"/>
                    </div>
                </div>
                <div className="input-container">
                    <ReactLabel text="Upload filename*" forElement="uploadFile"/>
                    <ReactInput inputType="file" inputName="uploadFile"
                                inputPlaceholder={null} value={thisFormValues.uploadedFiles}
                                onInputChange={onChange}/>
                </div>
                <div className="input-container">
                    <ReactLabel text="Enter Url*" forElement="url"/>
                    <ReactInput inputType="url" inputName="url"
                                inputPlaceholder={null} value={thisFormValues.url}
                                onInputChange={onChange}/>
                </div>
                <div className="select-container">
                    <ReactLabel text="Select your choice" forElement="answers"/>
                    <ReactSelect id="answers" name="answers" options={answersOptions}/>
                </div>
                <div className="textarea-container">
                    <ReactLabel text="About:" forElement="about"/>
                    <ReactTextArea name="about" maxLength={200}/>
                </div>
                <div className="input-container">
                    <ReactLabel text="Submit Or Reset" forElement=""/>
                    <div className="button-container">
                        <ReactButton type="submit" text="Submit" name="submit"/>
                        <ReactButton type="reset" text="Reset" name="reset"/>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default ReactForm;