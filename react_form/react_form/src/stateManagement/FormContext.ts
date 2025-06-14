import * as React from 'react';
import type {FormContextType} from "./FormContextType.ts";
import FormValues from "./types/FormValues.ts";

const aFormContext: FormContextType = {
    formValues: FormValues,
    hasBeenSubmitted: false,
}
export const FormContext = React.createContext<FormContextType | null>(aFormContext);
export {aFormContext};

