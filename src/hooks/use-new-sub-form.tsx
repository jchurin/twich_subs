import { useCallback, useReducer } from "react"
import { Sub } from "../types"

interface FormState {
    inputValues : Sub
}

type FormReducerAction = {
    type: "change_value",
    payload: {
        inputName: string
        inputValue: string
    }
} |
{
    type: "clear"
}

const INITIAL_STATE = {
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
}

const formReducer = (state: FormState['inputValues'], action: FormReducerAction) => {
    switch (action.type) {
        case "change_value":
            const {inputName, inputValue} = action.payload
            return {
                ...state,
                [inputName]: inputValue
            }
        case "clear":
            return INITIAL_STATE
    }
}

const useNewSubForm = () => {
    const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE)

    const clearForm = useCallback(() => {
        dispatch({type: "clear"})
    }, [])

    const changeValues = useCallback((inputName: string, inputValue: string) => {
        dispatch({type: "change_value", payload: {inputName, inputValue}})
    }, [])

    return {inputValues, changeValues, clearForm}
}

export default useNewSubForm