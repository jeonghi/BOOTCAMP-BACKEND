import {checkValidationPhone, getToken, sendTokenToSMS} from "./phone.js";

let createTokenOfPhone = (phone, count) => {

    const isValid = checkValidationPhone(phone)
    if(isValid) {
        const token = getToken(count)
        sendTokenToSMS(phone, token)
    }
}

createTokenOfPhone("01012345678", 10)