//logic to check value intputs

export default function validateInfo(values) {
    let errors={}

    if(!values.email){
        errors.email= 'email required'}                 //if no email is received
    else if (!/\S+@\S+\.\S+/.test(values.email)) {      //if email is invalid format
        errors.email = 'Email address is invalid'}

    if (!values.password) {
        errors.password = 'Password is required'} 
    else if (values.password.length < 6) {      //add here for password validation
        errors.password = 'Email/Passwwords are invalid'}

    return errors;
    

}

    // if(!values.email){
    //    errors.email= 'email required'}                 //if no email is received
    // else if (!/\S+@\S+\.\S+/.test(values.email)) {      //if email is invalid format
    //    errors.email = 'Email address is invalid'}

        //if (!values.password2) {
    //    errors.password2 = 'Password is required'}
    //else if (values.password2 !== values.password) {
    //    errors.password2 = 'Passwords do not match'}