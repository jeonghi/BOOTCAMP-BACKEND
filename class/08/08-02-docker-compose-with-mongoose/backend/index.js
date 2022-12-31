import express from 'express'
import {checkValidationPhone, sendTokenToSMS, getToken} from "./phone.js";
import {checkValidationEmail, getWelcomeTemplate, sendWelcomeTemplateToEmail} from "./email.js";
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import {options} from './swagger/config.js'
import cors from 'cors'
import {mongoose} from "mongoose"
import {Board} from "./models/board.model.js";

const app = express()
app.use(express.json()) // json 사용하도록 코드 추가
app.use(cors())

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)))

app.get('/', (req, res) => {
    res.send('Hello world')

})

// 게시판 목록을 조회
app.get('/boards', async (req, res) => {

    // 1. 데이터를 조회 from DB
    // const result = [
    //     {
    //         number: 1,
    //         writer: '철수',
    //         title: '안녕하세요',
    //         contents: '내용이예요'
    //     },
    //     {
    //         number: 2,
    //         writer: '둘리',
    //         title: '안녕하세요22',
    //         contents: '내용이예요22'
    //     },
    //     {
    //         number: 3,
    //         writer: '영희',
    //         title: '안녕하세요33',
    //         contents: '내용이예요33'
    //     },
    // ];

    const result = await Board.find()
    // 조회 요청 결과 응답
    res.send(result)
})

// 게시판 추가
app.post('/boards', async (req, res)=>{
    console.log(req.body);

    // 1. 데이터를 등록 to DB

    const board = new Board({
        writer: req.body.writer,
        title: req.body.title,
        contents: req.body.contents,
    })

    await board.save()
    // 2. 등록 요청 결과 응답

    res.send('게시물 등록에 성공');
});


// createTokenOfPhone -> rest-API 로 만들기
app.post('/tokens/phone', (req, res) => {

    // 1. 요청 바디 파싱
    const phone = req.body.phone

    // 2. 검증
    const isValid = checkValidationPhone(phone)

    if(!isValid) res.send(JSON.stringify({'statusCode': 404}))

    const token = getToken(6)

    // 3. 휴대폰에 토큰 전송
    sendTokenToSMS(phone, token)
    res.send(JSON.stringify({'statusCode': 200}))
})


app.post('/users', (req, res) => {

    // 1. 요청 바디 파싱
    const user = req.body.user

    // 2. 이메일 검증
    const isValid = checkValidationEmail(user)

    if(!isValid){res.send(JSON.stringify({'statucCode':404}))}

    // 3. 이메일 가입환영 템플릿 만들기
    const welcomeTemplate = getWelcomeTemplate(user)

    sendWelcomeTemplateToEmail(user.email, welcomeTemplate)
    res.send(JSON.stringify({'statusCode':200}))
})

mongoose.connect("mongodb://my-database:27017/mydocker")

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
})