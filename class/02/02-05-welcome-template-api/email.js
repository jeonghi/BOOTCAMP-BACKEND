import {getToday} from "./utils.js";

export let checkValidationEmail = ({email}) => {
    if(email === undefined || !email.includes('@')){
        return false
    }
    return true
}
export let getWelcomeTemplate = ({name, age, school, createdAt}) => {
    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다.</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}살</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    `;
}

export let sendWelcomeTemplateToEmail = (email, template) => {
    console.log(`${email}로 템플릿 ${template}를 전송합니다.`)
}
