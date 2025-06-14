import ReactForm from "./components/ReactForm.tsx";
import {FormContext, aFormContext} from "./stateManagement/FormContext.ts";
import {useMemo, useState} from "react";
import UserDetails from "./components/UserDetails.tsx";
import type {FormContextType} from "./stateManagement/FormContextType.ts";

const App = () => {
    const [formValues, setFormValues] = useState({formValues: aFormContext.formValues});
    const [hasBeenSubmitted, setHasBeenSubmitted] =
        useState({hasBeenSubmitted: aFormContext.hasBeenSubmitted});
    const formContext: FormContextType = useMemo(() => {
        return {...formValues, ...hasBeenSubmitted}
    }, [formValues, hasBeenSubmitted]);
    return (
        <FormContext.Provider value={formContext}>
            <div className="container-row">
                <ReactForm formValues={formValues.formValues}
                           setSubmitted={setHasBeenSubmitted}
                           onSubmitForm={setFormValues}/>
                <UserDetails/>
            </div>
        </FormContext.Provider>
    )
}

export default App
