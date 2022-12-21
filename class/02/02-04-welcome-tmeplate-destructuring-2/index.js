const name = "철수"
const age = 13
const school = "국민대"
const createdAt = '2022-12-31'

const myUser = {
    name,
    age,
    school,
    createdAt
};

let getWelcomeTemplate = ({name, age, school, createdAt}) => {
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

console.log(getWelcomeTemplate(myUser));