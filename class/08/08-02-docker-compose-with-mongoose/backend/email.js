import {getToday} from "./utils.js";
import nodemailer from 'nodemailer';
import "dotenv/config"

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
                <div>가입일: ${createdAt?createdAt:getToday()}</div>
            </body>
        </html>
    `;
}

export let sendWelcomeTemplateToEmail = async (email, template) => {
    console.log(`${email}로 템플릿 ${template}를 전송합니다.`)

    const EMAIL_USER = process.env.EMAIL_USER
    const EMAIL_PASS = process.env.EMAIL_PASS
    const EMAIL_SENDER = process.env.EMAIL_SENDER

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        },
    });

    const option = {
        from: EMAIL_SENDER,
        to: email,
        subject: "[쩡화니는 백엔드 공부중] 히히히히",
        html: template,
    }

    const result = await transporter.sendMail(option)
    //console.log(result)
}
