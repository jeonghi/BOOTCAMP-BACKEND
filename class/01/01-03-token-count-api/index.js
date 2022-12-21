let createTokenOfPhone = (phone, count) => {
    if(phone.length != 10 && phone.length != 11) {
        console.log("휴대폰 번호의 자릿수가 맞지 않습니다")
        return;
    }

    if(count > 10) return
    else if(count <= 0) return
    else if(count === undefined) return

    let token = String(Math.floor(Math.random()*10**count)).padStart(count, '0')
    console.log(token)
}

createTokenOfPhone("01012345678", 10)