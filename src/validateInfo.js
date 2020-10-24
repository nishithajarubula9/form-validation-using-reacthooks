export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "username required"
    }

    if(!values.email) {
        errors.email = "Email required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "email address is invalid"
    }

    if(!values.password) {
        errors.password = 'password is required'
    } else if(values.password.length < 6) {
        errors.password = 'password needs to 6 characters or above';
    }

    if(!values.password2) {
        errors.password2 = "password is required"
    } else if(values.password2 !== values.password) {
        errors.password2 = 'passwords do not match'
    }

    return errors;
}