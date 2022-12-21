let newProfile =   {
    name: '철수',
    age: 13,
    school: '다람쥐초등학교',
    hobby: {
        one: '수영',
        two: '프로그래밍',
    }
}

console.log(JSON.stringify(newProfile))

console.log(JSON.parse(JSON.stringify(newProfile)))
// 깊은 복사를 시도하여라