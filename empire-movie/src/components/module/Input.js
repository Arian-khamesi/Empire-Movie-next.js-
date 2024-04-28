"use client"

import React, { useEffect, useReducer } from 'react'
import styles from "./Input.module.css"

import validator from '@/app/Validation/validator'

export default function Input(props) {

    const inputReducer = (state, action) => {
        switch (action.type) {
            case 'CHANGE': {
                return {
                    ...state,
                    value: action.value,
                    isValid: validator(action.value, action.validations)

                }
            }
            default: {
                return state
            }
        }

    }

    const [maininput, dispatch] = useReducer(inputReducer,
        {
            value: '',
            isValid: false
        })


    const { value, isValid } = maininput;
    const {  id } = props;


    useEffect(() => {
        props.onInputHandler(id, value, isValid)
    }, [value])


    const inputChangeHandler = (event) => {
        dispatch({
            type: 'CHANGE',
            value: event.target.value,
            validations: props.validations,
            isValid: true
        })
    }

    return (
        <>
           <input
            type={props.type}
            placeholder={props.placeholder}
            className={`${props.className} ${maininput.isValid ? (styles.success) : (styles.error)}`}
            value={maininput.value}
            // validations={props.validations}
            onChange={inputChangeHandler}
        />
        </>
    )
}