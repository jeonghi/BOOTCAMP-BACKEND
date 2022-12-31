import coolsms from 'coolsms-node-sdk';
import 'dotenv/config';

export let checkValidationPhone = (phone) => {
    if(phone.length != 10 && phone.length != 11) {
        console.log("휴대폰 번호의 자릿수가 맞지 않습니다")
        return false
    }
    return true
}

export let getToken = (count) => {
    if(count > 10) return
    else if(count <= 0) return
    else if(count === undefined) return
    let token = String(Math.floor(Math.random()*10**count)).padStart(count, '0')
    return token
}

export let sendTokenToSMS = async (phone, token) => {

    const SMS_KEY = process.env.SMS_KEY
    const SMS_SECRET = process.env.SMS_SECRET
    const SMS_SENDER = process.env.SMS_SENDER

    const sms = coolsms.default; //SDK 입력하기

    const msgService = new sms(SMS_KEY, SMS_SECRET)

    const params = {
        to: phone,
        from: SMS_SENDER,
        text: `[정환이는 백엔드 공부중] 안녕하세요?! 요청하신 인증번호는 [${token}] 입니다.`
    }

    const result = await msgService.sendOne(params)

    //console.log(result)
}