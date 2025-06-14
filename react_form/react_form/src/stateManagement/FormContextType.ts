import type IForm from "./types/IForm.ts"

export type FormContextType = {
    formValues: IForm,
    hasBeenSubmitted: boolean
    // onTextChange: (value: string) => void
    // saveForm: (formValues: IForm) => void,
}