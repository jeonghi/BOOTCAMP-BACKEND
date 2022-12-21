let getToken = (count) => {

    if(count == undefined){
        return
    }else if(count <= 0){
        return
    }else if(count > 10){
        return
    }

    let v = String(Math.floor(Math.random() * 10 ** count)).padStart(count, '0')
    console.log(v)
}

getToken(5)
getToken(7)
getToken(-1)
getToken(11)