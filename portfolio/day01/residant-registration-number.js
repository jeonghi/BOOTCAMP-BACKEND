const validationRegistrationNumber = (registrationNumber) => {

    if(!registrationNumber.includes('-')){
        console.log("에러 발생!! 형식이 올바르지 않습니다!!!!")
        return false
    }

    const tmp = registrationNumber.split("-", 2)

    if(!(tmp.length == 2 && tmp[0].length == 6 && tmp[1].length == 7)){
        console.log("에러 발생!! 개수를 제대로 입력해주세요!!!")
        return false
    }

    return true
}

const generateCustomRegistrationNumber = (registrationNumber, num) => {
    return registrationNumber.slice(0, -num).padEnd(registrationNumber.length, '*')
}

const customRegistrationNumber = (registrationNumber) => {
    //앞 6자리, 뒤 7자리 - 포함 총 14자리 검증
    const isValid = validationRegistrationNumber(registrationNumber)

    if(!isValid) return

    console.log(generateCustomRegistrationNumber(registrationNumber, 6))
}

customRegistrationNumber("210510-1010101")
customRegistrationNumber("210510-1010101010101")
customRegistrationNumber("2105101010101")

