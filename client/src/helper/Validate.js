import toast from "react-hot-toast"


//Validate Login details //
export async function userValidate(values){
    const errors = userVerify({}, values)

    return errors
}

function userVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error("Username Required")
    } else if(values.username.includes(" ")){
        error.username = toast("Invalid Username")
    }

    if(!values.password){
        error.password = toast.error("Password Required")
    } else if(values.password.includes(" ")){
        error.password = toast.error("Wrong Password")
    } else if(values.password.length < 4){
        error.password = toast.error("Password must be longer than 4 characters")
    }
    return error
}

// Validate Register Details //
export async function registerValidate(values){
    const errors = userVerify({}, values)
    passwordVerify(errors, values)
    emailVerify(errors, values)
}

function emailVerify(error = {}, values){
    if(!values.email){
        error.email = toast.error("Email Required")
    }else if(values.email.includes(" ")){
        error.email = toast.error("Enter a valid Email")
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error("Invalid Email Address")
    }
    return error
}

function passwordVerify(errors = {}, values){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error("Password Required");
    } else if(values.password.includes(" ")){
        errors.password = toast.error("Wrong Password");
    }else if(values.password.length < 4){
        errors.password = toast.error("Password must be more than 4 characters long");
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("Password must have special character");
    }

    return errors;
}