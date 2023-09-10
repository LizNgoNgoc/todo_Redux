function passwordValidation(e) {
    const pass =  /^[A-Za-z]\w{7,14}$/;
    const value = e.target.value
    return pass.test(value)
}

function mailValidation(e) {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const value = e.target.value
    return EMAIL_REGEXP.test(value)
}

export {passwordValidation, mailValidation}