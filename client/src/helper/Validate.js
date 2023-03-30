import toast from "react-hot-toast"

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
    } else if(values.password.include(" ")){
        error.password = toast.error("Wrong Password")
    } else if(values.password.length < 4){
        error.password = toast.error("Password must be longer than 4 characters")
    }
    return error
}