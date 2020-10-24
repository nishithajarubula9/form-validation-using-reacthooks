import {useState, useEffect} from 'react';
import validateInfo from './validateInfo';


const useForm = (validate, callback) => {
    const [values, setValues] = useState({
        username: '',
        email: '', 
        password: '',
        password2: ''
    })

    const [errors, setErrors] = useState({

    });
    const [isSubmitting, setIsSubmitting] = useState(false)

    

    const handleChange = (e) => {
        const { name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    })


    return {handleChange, values, handleSubmit, errors};

    
}


export default useForm;
