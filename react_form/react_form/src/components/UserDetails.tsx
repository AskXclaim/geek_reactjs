import {useContext} from "react";
import {FormContext} from "../stateManagement/FormContext.ts"
import type {FormContextType} from "../stateManagement/FormContextType.ts";
import Header from "./Header.tsx";
import ReactLabel from "./ReactLabel.tsx";

const UserDetails = () => {
    const context = useContext<FormContextType | null>(FormContext);
    const formValues = context?.formValues;
    const isSubmitted = context?.hasBeenSubmitted;

    if (isSubmitted && formValues) {
        return (<div className="container-user-details">
            <Header title="Submitted User Details"/>
            <div className="display-value">
                <ReactLabel text="First Name:" forElement=""/>
                <ReactLabel text={formValues.firstName} forElement=""/>
            </div>
            {formValues.firstName}
            {formValues.lastName}
            {formValues.email}
        </div>)
    } else {
        return (<div className="container-user-details">
            No details available to display!</div>)
    }
}

export default UserDetails;