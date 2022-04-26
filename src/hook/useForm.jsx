import { useState } from 'react'

export const useForm = (initialState = '') => {

    const [value, setValue] = useState(initialState)

    const onChange = (changeValue) => {
        setValue(changeValue)
    }

    const reset = () => {
        setValue(initialState)
    }

    return {
        value,
        onChange,
        reset
    }

}