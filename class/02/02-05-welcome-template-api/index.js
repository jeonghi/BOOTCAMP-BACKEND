import {checkValidationEmail, getWelcomeTemplate, sendWelcomeTemplateToEmail} from "./email.js";

let createUser = (user) => {
    // 이메일 유효성 검사
    let isValid = checkValidationEmail(user)
    // 유효하다면, 유저 정보에 맞는 템플릿 생성
    if(isValid) {
        // 템플릿을 이메일로 전송
        let template = getWelcomeTemplate(user)
        sendWelcomeTemplateToEmail(user.email, template)
    }
}


const user = {
    name: "정환",
    age: 25,
    school: "국민대학교",
    email: "aaa@email.com"
}

createUser(user)