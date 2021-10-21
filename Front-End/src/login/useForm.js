//custom hooks need to start with USE

import {useState, useEffect, useContext} from 'react'
import { useAuth } from '../capacity/components/hooks/auth-hook';
import { AuthContext } from '../context/AuthContext';


const useForm = (validate, isSignUp, setIsSubmitted, isResetPassword) => {

    const auth = useContext(AuthContext);

    const[values, setValues] = useState({
        username:'',
        email:'',
        password:'',
        password2:'',
    })
    const[errors, setErrors] = useState({})
    const [isSumbitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const{name,value}= e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = async e => {
        e.preventDefault()
        setErrors(validate(values))
        setIsSubmitting(true)
        if (Object.keys(errors).length ===0 && isSumbitting) {
            if (isSignUp) {
                if (auth.signup) {
                    setIsSubmitted(true)
                }
            } else if (isResetPassword) {
                if (auth.resetPassword) {
                    setIsSubmitted(true)
                }
            } else {
                if (auth.login) {
                    setIsSubmitted(true);
                }
            }
        }
    }

    // useEffect( ()=> {
    //     if (Object.keys(errors).length ===0 && isSumbitting) {
    //         if (isSignUp) {
    //             callback()
    //         } else {
    //             callback(values.email, values.password)
    //         }
    //     }
    // },
    // [errors]
    // )
    return {handleChange, values, handleSubmit,errors}

}


export default useForm
